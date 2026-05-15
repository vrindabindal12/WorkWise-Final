<div align="center">
  
# 🚀 WorkWise

**The AI-Powered Career Intelligence & Navigation Platform**

[![Next.js](https://img.shields.io/badge/Next.js-15.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-20232A?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/AI-Google_Gemini-4285F4?style=for-the-badge)](https://deepmind.google/technologies/gemini/)

</div>

<br />

WorkWise is a comprehensive, full-stack application designed to empower professionals with AI-driven career tools. It bridges the gap between chaotic job searching and strategic career growth by providing an intelligent ecosystem that handles everything from resume optimization to real-time interview preparation.

This project was built to demonstrate proficiency in architecting **scalable, AI-integrated full-stack applications** using bleeding-edge web technologies and modern UI/UX principles.

---

## ✨ Core Features

### 🧠 Generative AI Career Mentor
Leverages **Google's Gemini AI** to provide highly contextual, personalized career guidance. The mentor dynamically analyzes the user's industry, experience, and goals to deliver tailored advice.

### 📄 Smart ATS Resume Builder
An intelligent resume editor utilizing `@uiw/react-md-editor` for robust markdown editing, featuring AI-driven ATS (Applicant Tracking System) scoring and actionable feedback. Exports seamlessly to PDF using `html2pdf.js`.

### ✍️ Context-Aware Cover Letter Generator
Automatically synthesizes personalized cover letters by cross-referencing the user's profile with specific Job Descriptions and Company Data, significantly reducing application friction.

### 📊 Real-Time Industry Insights
A comprehensive analytics dashboard powered by `recharts`. It aggregates and visualizes critical market data including salary medians, growth rates, demand levels, and top required skills for specific sub-industries.

### 🎤 Interactive Interview Preparation
A dedicated module for technical and behavioral interview prep. It tracks assessment scores dynamically and utilizes WebRTC (`peerjs`) capabilities to simulate real interview environments.

### ⚡ Event-Driven Architecture
Utilizes **Inngest** for reliable background job processing and asynchronous event handling, ensuring the UI remains highly performant during heavy AI generation tasks.

---

## 🛠️ Technology Stack

**Frontend Architecture:**
- **Framework:** Next.js 15 (App Router, Turbopack)
- **Library:** React 19
- **Styling:** Tailwind CSS v4, Framer Motion (Micro-interactions & Layout animations)
- **UI Components:** Radix UI (Accessible Primitives), Lucide React (Icons)
- **Forms & Validation:** React Hook Form + Zod validation

**Backend & Database:**
- **ORM:** Prisma (v6.5)
- **Database:** PostgreSQL (via Neon / Supabase / Render)
- **Authentication:** Clerk Next.js (Secure, multi-tenant Auth)
- **Background Jobs:** Inngest (Async processing)

**AI & Integrations:**
- **LLM:** Google Generative AI (`@google/generative-ai`)
- **WebRTC:** PeerJS (Real-time communication)

---

## 📐 Database Architecture

The data layer is rigorously modeled using Prisma to maintain strict referential integrity across the application. 

- **User:** Centralized profile holding clerk metadata, skills, and industry relations.
- **IndustryInsight:** Aggregated analytical model storing JSON metrics for salary ranges, market outlooks, and Top Skills.
- **Resume & CoverLetter:** 1-to-1 and 1-to-many relationships linking users to their generated markdown artifacts.
- **Assessment:** Tracks detailed JSON logs of quiz answers, overall scoring, and AI-generated improvement tips.

---

## 💻 Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/WorkWise-Final.git
cd WorkWise-Final
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory and populate the required keys:
```env
# Database
DATABASE_URL="postgresql://user:password@host:port/db"

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# AI (Google Gemini)
GEMINI_API_KEY=your_gemini_api_key

# Webhook Secrets
INGEST_SIGNING_KEY=your_inngest_key
```

### 4. Initialize Database
Generate the Prisma client and push the schema to your database.
```bash
npm run build # Triggers prisma generate
npx prisma db push
```

### 5. Run the Development Server
```bash
npm run dev
```
Navigate to `http://localhost:3000` to explore the application.

---

## 🎯 Engineering Focus

This project was built with a strong emphasis on:
1. **Exceptional UI/UX:** Implementing fluid animations with Framer Motion, glassmorphism design trends, and an ultra-responsive layout to create a "Wow" factor.
2. **Robust Data Handling:** Utilizing Zod for end-to-end type safety from the frontend forms to the Prisma database schema.
3. **Scalable System Design:** Offloading heavy AI generation tasks to background workers (Inngest) to prevent serverless function timeouts and maintain a snappy user experience.

<br />
<div align="center">
  <i>Built by an ambitious engineer pushing the boundaries of AI web applications.</i>
</div>
