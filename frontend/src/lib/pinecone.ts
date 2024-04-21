import { Pinecone, PineconeRecord } from "@pinecone-database/pinecone";
import { downloadFromS3 } from "./s3-server";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";

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
   return pages;
  }