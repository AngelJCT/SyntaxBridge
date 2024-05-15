// app/api/translate/route.js
import { getGroqChatCompletion } from '@/utils/groq';

export const POST = async (req) => {
  try {
    const { code } = await req.json();
    const response = await getGroqChatCompletion(code);
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to get translation' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
