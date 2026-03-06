"use client"

import { useState } from "react"

export default function ChatPage(){

const [message,setMessage] = useState("")
const [messages,setMessages] = useState([])

async function send(){

const res = await fetch("/api/chat",{
method:"POST",
headers:{ "Content-Type":"application/json" },
body:JSON.stringify({
character:{
name:"Luna",
personality:"curiosa hacker futurista",
scenario:"laboratório de IA"
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

<div style={{padding:40}}>

<h1>Chat com Luna</h1>

<div>
{messages.map((m,i)=>(
<p key={i}>
<b>{m.role}:</b> {m.text}
</p>
))}
</div>

<input
value={message}
onChange={e=>setMessage(e.target.value)}
placeholder="Digite..."
/>

<button onClick={send}>Enviar</button>

</div>

)

}