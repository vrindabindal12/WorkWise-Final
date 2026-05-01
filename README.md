<div align="center">
  
# WorkWise

**AI-Native Career Intelligence & Telemetry Platform**

[![Next.js](https://img.shields.io/badge/Next.js-15.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-20232A?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/AI-Google_Gemini-4285F4?style=for-the-badge)](https://deepmind.google/technologies/gemini/)

</div>

<br />

WorkWise is an enterprise-grade, full-stack application architected to orchestrate Large Language Models (LLMs), real-time peer-to-peer protocols, and event-driven background processing. Designed as a comprehensive career intelligence platform, it handles complex data synthesis to generate ATS-optimized artifacts and dynamic market analytics.

This repository serves as a demonstration of advanced system design, scalable full-stack development, and seamless integration of third-party APIs within a modern React/Next.js ecosystem.

---

## Technical Architecture & Core Complexity

WorkWise was engineered to solve complex state management and asynchronous processing challenges common in AI-heavy applications. The architecture relies on several advanced paradigms to maintain high availability and a seamless user experience.

### 1. LLM Orchestration & Contextual Synthesis
The platform integrates **Google Generative AI (Gemini)** to power a contextual career mentor and a dynamic cover letter generator. Rather than simple API wrappers, the system aggregates user telemetry (skills, JSON-structured assessment histories, and industry data) to construct highly specific prompt contexts, ensuring deterministic and highly relevant AI outputs.

### 2. Event-Driven Asynchronous Processing
AI payload generation and heavy data aggregation tasks are decoupled from the main thread using **Inngest**. By implementing an event-driven background processing model, the application prevents serverless function timeouts, guarantees fault-tolerant task execution, and maintains ultra-low latency for the client-side UI during resource-intensive operations.

### 3. Real-Time WebRTC Integration
The interview preparation module implements **PeerJS** to establish peer-to-peer WebRTC connections. This allows for low-latency, real-time media streams and data channel communications, bypassing server bottlenecks for live mock interview simulations.

### 4. Strict Type Safety & Relational Modeling
End-to-end type safety is enforced from the database layer to the React DOM. **Prisma ORM** manages a normalized PostgreSQL schema featuring complex relationships (1:1, 1:M) and heavily utilized JSON columns for unstructured analytics. **Zod** validates all mutations and form schemas, drastically reducing runtime exceptions.

### 5. Algorithmic ATS Artifact Generation
The Resume Builder combines `@uiw/react-md-editor` for robust markdown parsing with custom algorithms to calculate real-time Applicant Tracking System (ATS) compatibility scores. The document generation pipeline utilizes `html2pdf.js` to render the DOM dynamically into pixel-perfect PDF blobs.

---

## Technology Stack

**Frontend Infrastructure:**
- **Framework:** Next.js 15 (App Router, Turbopack for compilation speed)
- **Library:** React 19 (Leveraging modern concurrent rendering features)
- **State & UI:** Tailwind CSS v4, Framer Motion (Hardware-accelerated animations)
- **Component Primitives:** Radix UI (Unstyled, strictly accessible components)
- **Data Visualization:** Recharts (SVG-based charting for industry metrics)

**Backend Infrastructure:**
- **Runtime:** Node.js Edge / Serverless deployment model
- **Database:** PostgreSQL (Cloud-native deployment)
- **ORM:** Prisma v6.5 (Strictly typed query builder and schema migration)
- **Authentication:** Clerk Next.js (Multi-tenant, JWT-based secure sessions)
- **Job Queue:** Inngest (Serverless event-driven worker execution)

---

## Database Schema Highlights

The database is architected to support complex querying for user analytics and AI context injection. Notable design decisions include:

- **IndustryInsight Entity:** Acts as a centralized analytics hub utilizing Prisma's `Json[]` fields to store complex, deeply nested objects like `salaryRanges` `{ role, min, max, median }` without requiring excessive relational joins.
- **Assessment Entity:** Maintains immutable historical logs of user performance, tracking AI-generated `improvementTips` to feed back into the Generative AI context window for future interactions.
- **Relational Integrity:** Strict foreign key constraints bind user profiles to their respective Markdown `Resume` and `CoverLetter` artifacts, ensuring data cascading and isolation.

---

## Local Development Setup

### 1. Repository Initialization
```bash
git clone https://github.com/yourusername/WorkWise-Final.git
cd WorkWise-Final
npm install
```

### 2. Environment Configuration
Establish a `.env` file in the project root with the following requisite keys:
```env
# Database Credentials
DATABASE_URL="postgresql://user:password@host:port/db"

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Generative AI Integrations
GEMINI_API_KEY=your_gemini_api_key

# Event-Driven Webhooks
INGEST_SIGNING_KEY=your_inngest_key
```

### 3. Database Migration
Synchronize the Prisma schema with the PostgreSQL instance and generate the typed client.
```bash
npm run build
npx prisma db push
```

### 4. Bootstrapping the Server
```bash
npm run dev
```
The application will execute on `http://localhost:3000`.

---

<br />
<div align="center">
  <i>Engineered for scale, reliability, and unparalleled user experience.</i>
</div>
