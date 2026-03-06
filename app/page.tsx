"use client"

import { useState } from "react"

export default function Home(){

const [message,setMessage] = useState("")
const [messages,setMessages] = useState([])

async function send(){

if(!message) return

try{

const res = await fetch("/app/api/chat",{
method:"POST",
headers:{ "Content-Type":"application/json" },
body:JSON.stringify({
character:{
name:"Luna",
personality:"curiosa hacker futurista",
scenario:"laboratório de IA"
},
history:"",
message:message
})
})

const data = await res.json()

setMessages(prev => [
...prev,
{role:"user",text:message},
{role:"ai",text:data.reply || "Sem resposta da IA"}
])

setMessage("")

}catch(e){

setMessages(prev => [
...prev,
{role:"ai",text:"Erro ao conectar com a IA"}
])

}

}

return (

<div style={{padding:40,fontFamily:"Arial"}}>

<h1>AI Character Platform</h1>
<h2>Chat com Luna</h2>

<div style={{marginBottom:20}}>
{messages.map((m,i)=>(
<p key={i}>
<b>{m.role === "user" ? "Você" : "Luna"}:</b> {m.text}
</p>
))}
</div>

<input
value={message}
onChange={(e)=>setMessage(e.target.value)}
placeholder="Digite uma mensagem..."
style={{padding:10,width:"70%"}}
/>

<button
onClick={send}
style={{padding:10,marginLeft:10,cursor:"pointer"}}
>
Enviar
</button>

</div>

)
}
