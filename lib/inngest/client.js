import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "job-ready", // Unique app ID
  name: "Job Ready",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
