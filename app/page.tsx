"use client"

import { useState } from "react"

export default function Home() {

const [message,setMessage] = useState("")
const [messages,setMessages] = useState([])

async function send(){

if(!message) return

const res = await fetch("/api/chat",{
method:"POST",
headers:{ "Content-Type":"application/json" },
body:JSON.stringify({
character:{
name:"Luna",
personality:"curiosa, divertida, hacker futurista",
scenario:"um laboratório de inteligência artificial"
},
history:"",
message
})
})

const data = await res.json()

setMessages([
...messages,
{role:"user",text:message},
{role:"ai",text:data.reply}
])

setMessage("")
}

return (

<div style={{padding:40,fontFamily:"Arial"}}>

<h1>AI Character Platform</h1>
<h2>Chat com Luna</h2>

<div style={{marginBottom:20}}>
{messages.map((m,i)=>(
<p key={i}>
<b>{m.role==="user" ? "Você" : "Luna"}:</b> {m.text}
</p>
))}
</div>

<input
value={message}
onChange={e=>setMessage(e.target.value)}
placeholder="Digite uma mensagem..."
style={{padding:10,width:"70%"}}
/>

<button
onClick={send}
style={{padding:10,marginLeft:10}}
>
Enviar
</button>

</div>

)
}