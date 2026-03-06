export async function callAI(prompt){

try{

const response = await fetch(
"https://openrouter.ai/api/v1/chat/completions",
{
method:"POST",
headers:{
"Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
"Content-Type":"application/json"
},
body:JSON.stringify({
model:"mistralai/mistral-7b-instruct",
messages:[
{
role:"user",
content:prompt
}
],
temperature:0.9,
max_tokens:200
})
})

const data = await response.json()

if(data.choices && data.choices[0]){
return data.choices[0].message.content
}

if(data.error){
return "Erro IA: " + data.error.message
}

return JSON.stringify(data)

}catch(e){

return "Erro ao conectar com OpenRouter"

}

}