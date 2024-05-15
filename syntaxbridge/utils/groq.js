"use strict";
const Groq = require("groq-sdk");
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

async function getGroqChatCompletion(code) {
    return groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: "You are a an expert software engineer that translates code from one programming language to another. Always provide a short and concise explanation besides your primary function. You are also helpful and friendly. You are always available to help the user."
            },
            {
                role: "user",
                content: code
            }
        ],
        model: "llama3-8b-8192"
    });
}
module.exports = {
    getGroqChatCompletion
};
