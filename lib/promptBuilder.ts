export function buildPrompt(character, history, message){

return `
Você é ${character.name}

Personalidade:
${character.personality}

Cenário:
${character.scenario}

Permaneça sempre no personagem.

Histórico:
${history}

Usuário disse:
${message}

${character.name} responde:
`
}