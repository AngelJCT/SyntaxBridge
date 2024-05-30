"use strict";
const Groq = require("groq-sdk");
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

async function getGroqChatCompletion(prompts) {
    try {
        console.log("Creating chat completion with prompt:", prompts); // Log the prompt
        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are an expert software engineer that translates code from one programming language to another. Always provide a short and concise explanation besides your primary function. You are also helpful and friendly. You are always available to help the user."
                },
                {
                    role: "user",
                    content: prompts
                }
            ],
            model: "llama3-70b-8192"
        });
        console.log("Chat completion response:", completion); // Log the response
        return completion;
    } catch (error) {
        console.error("Error creating chat completion:", error); // Log any errors
        throw error;
    }
}
module.exports = {
    getGroqChatCompletion
};
