import OpenAI from "openai";

type Message = {
    role: 'user' | 'assistant';
    content: string;
};

const openai = new OpenAI({
    apiKey: "MINHA CHAVE OPENAI",
    dangerouslyAllowBrowser: true
})

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function sendMenssage(menssages: Message[]) {
    // Adiciona delay para evitar problemas de rate limit
    await delay(1000);

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo", // Use modelos suportados
        messages: menssages.map(message => ({
            role: message.role,
            content: message.content
        }))
    });

    return {
        role: response.choices[0]?.message?.role || "assistant",
        content: response.choices[0]?.message?.content || ""
    };
}