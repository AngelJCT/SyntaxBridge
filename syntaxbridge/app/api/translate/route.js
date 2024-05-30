// app/api/translate/route.js
import { getGroqChatCompletion } from '@/utils/groq';

export const POST = async (req) => {
  try {
    const { code, language } = await req.json();
    const prompts = `Translate the following code to ${language}:\n\n${code}`;
    console.log("Prompt:", prompts);

    const response = await getGroqChatCompletion(prompts);
    console.log("Response:", response);

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: 'Failed to get translation' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
