import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "ai-based-skill-evaluator", // Unique app ID
  name: "Ai Based Skill Evaluator",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
