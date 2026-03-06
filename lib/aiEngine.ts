export async function callAI(prompt){

const response = await fetch(
"https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct",
{
method:"POST",
headers:{
"Authorization": `Bearer ${process.env.HF_TOKEN}`,
"Content-Type":"application/json"
},
body:JSON.stringify({
inputs:prompt,
parameters:{
max_new_tokens:200,
temperature:0.9
}
})
})

const data = await response.json()

if(Array.isArray(data)){
return data[0].generated_text
}

if(data.error){
return "Erro da IA: " + data.error
}

return JSON.stringify(data)

}