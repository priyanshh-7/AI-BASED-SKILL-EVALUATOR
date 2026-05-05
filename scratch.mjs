import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function test() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  try {
    const prompt = "Say hi";
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
  } catch (e) {
    console.error("Error:", e.message);
  }
}
test();
