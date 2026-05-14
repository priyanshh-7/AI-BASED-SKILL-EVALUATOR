# Deployment Guide for Render

This project is prepared for deployment on [Render](https://render.com/).

## Prerequisites

1.  **Database**: You need a PostgreSQL database. You can use Render's managed PostgreSQL or an external provider like Neon (which is currently used in `.env`).
2.  **Clerk**: Set up an application on [Clerk](https://clerk.com/) for authentication.
3.  **Gemini API**: Get an API key from [Google AI Studio](https://aistudio.google.com/).
4.  **Inngest**: Set up an account on [Inngest](https://www.inngest.com/) if you want to use background functions.

## Deployment Steps

1.  **Connect GitHub**: Connect your GitHub repository to Render.
2.  **Select Blueprint**: Render should automatically detect the `render.yaml` file. If not, create a new **Web Service**.
3.  **Environment Variables**: Ensure the following environment variables are set in the Render Dashboard:
    - `DATABASE_URL`: Your PostgreSQL connection string.
    - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key.
    - `CLERK_SECRET_KEY`: Your Clerk secret key.
    - `GEMINI_API_KEY`: Your Google Gemini API key.
    - `NEXT_PUBLIC_APP_URL`: The URL of your deployed app (e.g., `https://your-app-name.onrender.com`).
    - `INNGEST_EVENT_KEY`: (Optional) Your Inngest event key.
    - `INNGEST_SIGNING_KEY`: (Optional) Your Inngest signing key.

## Project Name

The project name has been set to **Job Ready** throughout the application.

- **Title**: `app/layout.js`
- **Header**: `components/header.jsx`
- **Inngest Client**: `lib/inngest/client.js`
- **Package Name**: `package.json`
