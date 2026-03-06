import { buildPrompt } from "@/lib/promptBuilder"

export async function POST(req){

const body = await req.json()

const prompt = buildPrompt(
body.character,
body.history,
body.message
)

return Response.json({
reply:"(resposta simulada da IA por enquanto)"
})

}