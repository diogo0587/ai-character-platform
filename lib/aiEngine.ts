export async function callAI(prompt){

const response = await fetch(
"https://router.huggingface.co/hf-inference/models/NousResearch/Hermes-2-Pro-Llama-3-8B",
{
method:"POST",
headers:{
Authorization: `Bearer ${process.env.HF_TOKEN}`,
"Content-Type":"application/json"
},
body:JSON.stringify({
inputs: prompt,
parameters:{
max_new_tokens:200,
temperature:0.9
}
})
})

const text = await response.text()

try{

const data = JSON.parse(text)

if(Array.isArray(data)){
return data[0].generated_text
}

if(data.error){
return "Erro da IA: " + data.error
}

return JSON.stringify(data)

}catch{

return "Erro da API: " + text

}

}