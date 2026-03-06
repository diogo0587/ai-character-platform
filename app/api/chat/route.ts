import { buildPrompt } from "../../../lib/promptBuilder"
import { callAI } from "../../../lib/aiEngine"

export async function POST(req){

const body = await req.json()

const prompt = buildPrompt(
body.character,
body.history,
body.message
)

const reply = await callAI(prompt)

return Response.json({
reply
})

}