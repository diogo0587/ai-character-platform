export async function callAI(prompt){

try{

const response = await fetch(
"https://router.huggingface.co/hf-inference/models/mistralai/Mistral-7B-Instruct-v0.2",
{
method:"POST",
headers:{
"Authorization": `Bearer ${process.env.HF_TOKEN}`,
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

let data

try{
data = JSON.parse(text)
}catch{
return "Erro da API: " + text
}

if(Array.isArray(data)){
return data[0].generated_text
}

if(data.error){
return "Erro IA: " + data.error
}

return JSON.stringify(data)

}catch(e){

return "Erro de conexão com IA"

}

}