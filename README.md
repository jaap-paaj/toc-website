# Landal AI Content Studio

Enterprise-grade AI-powered content creation and management platform for Landal GreenParks.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Package Manager:** npm

## 📁 Project Structure

```
landal-content-studio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles & design system
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   └── Card.tsx
│   │   └── layout/           # Layout components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   │   └── utils.ts
│   ├── types/                # TypeScript type definitions
│   │   └── index.ts
│   └── styles/               # Additional styles
├── public/                   # Static assets
└── package.json
```

## 🎨 Design System

### Brand Colors

- **Primary Green:** `#0097A2` - Main brand color
- **Hover Green:** `#007F88` - Interactive states
- **Background Crème:** `#F6F1DE` - Page background
- **Accent Orange:** `#FF6B35` - Call-to-action elements

### Usage in Code

```tsx
// Using Tailwind classes
<div className="bg-primary text-white">...</div>

// Using CSS variables
<div style={{ backgroundColor: 'var(--landal-primary)' }}>...</div>

// Using utility classes
<button className="btn-primary">Click me</button>
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The app will auto-reload when you make changes to the code.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🏗️ Architecture Decisions

### Why Next.js App Router?

- **Performance:** Server Components by default for optimal loading
- **SEO:** Built-in server-side rendering and metadata management
- **Developer Experience:** File-based routing and modern React features
- **Scalability:** Easy to add new routes and features

### Why TypeScript?

- **Type Safety:** Catch errors at compile time
- **Better IDE Support:** Autocomplete and IntelliSense
- **Maintainability:** Self-documenting code
- **Team Collaboration:** Clear contracts between components

### Why Tailwind CSS v4?

- **Performance:** Smaller bundle sizes with the new engine
- **Developer Experience:** Utility-first approach for rapid development
- **Consistency:** Design tokens ensure brand consistency
- **Customization:** Easy to extend with custom utilities

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 📝 Code Standards

### Component Structure

```tsx
// 1. Imports
import { useState } from "react";
import { Button } from "@/components/ui/Button";

// 2. Types/Interfaces
interface MyComponentProps {
  title: string;
}

// 3. Component
export function MyComponent({ title }: MyComponentProps) {
  // 4. Hooks
  const [state, setState] = useState();
  
  // 5. Event handlers
  const handleClick = () => {};
  
  // 6. Render
  return <div>{title}</div>;
}
```

### Naming Conventions

- **Components:** PascalCase (e.g., `Button.tsx`, `UserProfile.tsx`)
- **Utilities:** camelCase (e.g., `formatDate`, `debounce`)
- **Constants:** UPPER_SNAKE_CASE (e.g., `API_URL`, `MAX_ITEMS`)
- **Types/Interfaces:** PascalCase (e.g., `User`, `ApiResponse`)

## 🚢 Deployment

This application is ready for deployment on:

- **Vercel** (recommended for Next.js)
- **AWS Amplify**
- **Google Cloud Run**
- **Docker containers**

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📄 License

Proprietary - Landal GreenParks

## 👥 Team

Built with ❤️ by the Landal Development Team

---

**Note:** This is a production-grade application. All code follows enterprise standards for security, performance, and maintainability.
