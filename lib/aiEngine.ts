export async function callAI(prompt){

const response = await fetch(
"https://api-inference.huggingface.co/models/vicgalle/Roleplay-Llama-3-8B",
{
method:"POST",
headers:{
Authorization:`Bearer ${process.env.HF_TOKEN}`,
"Content-Type":"application/json"
},
body:JSON.stringify({
inputs:prompt,
parameters:{
max_new_tokens:300,
temperature:0.95,
top_p:0.9
}
})
})

const data = await response.json()

return data[0]?.generated_text || "..."
}