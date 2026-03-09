import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

// ✅ Gemini key check
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("Missing GEMINI_API_KEY");
}

const genAI = new GoogleGenerativeAI(apiKey);

// ✅ IMPORTANT — correct model name
const model = genAI.getGenerativeModel({
  model: "models/gemini-1.5-flash",
});

const generationConfig = {
  temperature: 0.4,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 2048,
};

const SYSTEM_PROMPT = `
You are FinAIBot, a helpful financial assistant.
Only answer finance-related questions.
Keep answers practical and beginner-friendly.
`;

export async function POST(req: Request) {
  try {
    const { messages } = (await req.json()) as {
      messages: ChatMessage[];
    };

    const latestUserMessage =
      messages?.[messages.length - 1]?.content || "";

    // ✅ Build prompt
    const prompt = `
${SYSTEM_PROMPT}

User: ${latestUserMessage}
Assistant:
`;

    // ✅ SIMPLE NON-STREAM CALL (stable)
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
      generationConfig,
    });

    const text = result.response.text();

    return NextResponse.json({
      content: text,
    });
  } catch (error) {
    console.error("Chat API Error:", error);

    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}