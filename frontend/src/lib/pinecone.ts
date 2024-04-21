import { Pinecone, PineconeRecord } from "@pinecone-database/pinecone";
import { downloadFromS3 } from "./s3-server";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import  {Document, RecursiveCharacterTextSplitter} from '@pinecone-database/doc-splitter' 
export const getPineconeClient = () => {
    return new Pinecone({
      apiKey: process.env.PINECONE_API_KEY!,
    });
  };

  type PDFPage= {
    pageContent: string;
    metadata: {
        loc: {pageNumber: number}
    }
  }

  export async function loadS3IntoPinecone(fileKey: string) {
   console.log('downloading s3 into file system')
   const file_name = await downloadFromS3(fileKey);
   if(!file_name)
    {
         throw new Error("could not download from S3")
    }

   const loader = new PDFLoader(file_name);
   const pages= (await loader.load()) as PDFPage[] ;
   const documents = await Promise.all(pages.map(prepareDocument));



   return pages;
  }
  
  export const truncateStringByBytes = (str: string, bytes: number) => {
    const enc = new TextEncoder();
    return new TextDecoder("utf-8").decode(enc.encode(str).slice(0, bytes));
  };
  
  async function prepareDocument(page: PDFPage) {
    let { pageContent, metadata } = page;
    pageContent = pageContent.replace(/\n/g, "");
    // split the docs
    const splitter = new RecursiveCharacterTextSplitter();
    const docs = await splitter.splitDocuments([
      new Document({
        pageContent,
        metadata: {
          pageNumber: metadata.loc.pageNumber,
          text: truncateStringByBytes(pageContent, 36000),
        },
      }),
    ]);
    return docs;
  }