from gradio_client import Client

client = Client("https://veer15-stabilityai-stable-diffusion-xl-base-1-0.hf.space/")
result = client.predict(
				"Space cowboy",
				api_name="/predict"
)
print(result)
