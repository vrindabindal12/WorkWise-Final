# WorkWise® Cinematic Platform

Welcome to the updated **WorkWise** web application, featuring the custom, cinematic landing page.

## Key Features

- **Cinematic Landing Page**: Built with a fullscreen looping background video, glassmorphic navigation, Google Fonts (Instrument Serif and Inter), and custom keyframe rise-fade animations.
- **Glassmorphic Navigation**: Navigation bar automatically adjusts layout on smaller viewports and features a liquid glass CTA button for authentication.
- **Clerk Integration**: Fully functional login and sign-up flows using Clerk Auth, redirecting active users directly to their dashboard.
- **Advanced Tools (Secondary Pages)**: Keep access to resume templates, AI cover letters, mentor chats, and mock interview preparations.

## Technical Details

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS, lucide-react icons, and custom keyframes for premium motion design.
- **Database**: PostgreSQL with Prisma ORM.

## Setup and Running

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Database & Environment**:
   Ensure `.env` contains your correct `DATABASE_URL` and Clerk API keys.

3. **Synchronize Schema**:
   ```bash
   npx prisma db push
   ```

4. **Run Dev Server**:
   ```bash
   npm run dev
   ```
