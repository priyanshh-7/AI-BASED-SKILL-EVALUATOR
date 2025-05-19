import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "jobready-ai", // Unique app ID
  name: "JobReady AI",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
