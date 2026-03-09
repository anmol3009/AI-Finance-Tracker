# FinWise.ly — Personal Finance Management Platform

![Last Commit](https://img.shields.io/github/last-commit/JyotirmoyDas05/finwise.ly)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

> A modern, AI-powered personal finance platform to track expenses, set financial goals, and grow your financial literacy — rebuilt and significantly enhanced by Anmol Santwani.

---

## ✨ Features

### 📊 Advanced Dashboard
- Real-time financial health overview
- Interactive expense tracking and categorization
- Dynamic charts and visualizations
- Monthly budget overview with comparisons

### 💰 Smart Finance Management
- Manual expense tracking and categorization
- Budget planning and tracking
- Full transaction history
- Spending analytics and insights

### 🎯 Goal Setting & Tracking
- Custom financial goal creation
- Visual progress indicators
- Milestone celebrations
- Goal-based savings suggestions

### 📚 Interactive Learning Hub
- Comprehensive financial education modules
- Interactive quizzes with scoring
- Video tutorials on financial topics
- Progress tracking and downloadable resources

### 🤖 AI Financial Assistant
- Natural language query processing
- Personalized financial advice
- Smart budget suggestions
- Learning recommendations powered by Gemini

### 🔒 Security & Auth
- Secure authentication via Firebase
- Email verification
- Protected routes
- Firebase security rules

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version |
|------------|---------|
| Next.js | ![Next.js](https://img.shields.io/badge/Next.js-15-blue) |
| TypeScript | ![TypeScript](https://img.shields.io/badge/TypeScript-4.5-blue) |
| Tailwind CSS | ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-blue) |
| Shadcn UI | ![Shadcn](https://img.shields.io/badge/Shadcn-1.0-blue) |
| Radix UI | ![Radix UI](https://img.shields.io/badge/RadixUI-1.0-blue) |
| Framer Motion | ![Framer](https://img.shields.io/badge/Framer-10.0.1-blue) |
| Recharts | ![Recharts](https://img.shields.io/badge/Recharts-2.15.0-blue) |
| Lucide React | ![Lucide](https://img.shields.io/badge/Lucide-0.48.0-blue) |

### Backend & Services
| Technology | Version |
|------------|---------|
| Firebase Firestore | ![Firebase](https://img.shields.io/badge/Firebase-11.5.0-orange) |
| Firebase Auth | ![Firebase](https://img.shields.io/badge/Firebase-11.5.0-orange) |
| Firebase Storage | ![Firebase](https://img.shields.io/badge/Firebase-11.5.0-orange) |
| NextAuth.js | ![NextAuth](https://img.shields.io/badge/NextAuth-4.24.7-green) |
| Google Generative AI (Gemini) | ![Gemini](https://img.shields.io/badge/Gemini-0.24.0-purple) |
| YouTube Data API v3 | ![YouTube](https://img.shields.io/badge/YouTube-API-red) |

---

## 📋 Prerequisites

- Node.js v18+ ![Node.js](https://img.shields.io/badge/Node.js-18+-green)
- npm or yarn ![npm](https://img.shields.io/badge/npm-10+-red)
- Git

---

## 🚀 Setup & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/JyotirmoyDas05/finwise.ly.git
cd finwise-ly
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure Firebase

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project
2. Add a web app and copy the config values
3. Enable **Email/Password** and **Google** auth providers under Authentication
4. Create a **Firestore** database in production mode with these collections:
   - `users` — user profiles
   - `transactions` — financial transactions
   - `goals` — financial goals
   - `learn` — learning resources
5. Enable **Firebase Storage**

### 4. Configure Google AI (Gemini)

1. Go to [Google AI Studio](https://makersuite.google.com/)
2. Create an API key with access to the Gemini model

### 5. Configure YouTube Data API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Enable **YouTube Data API v3**
3. Create an API key under Credentials

### 6. Set Up Environment Variables

Create a `.env.local` file in the root directory:
```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

# Google AI API
GOOGLE_AI_API_KEY=your_google_ai_api_key

# YouTube Data API
YOUTUBE_API_KEY=your_youtube_api_key

# NextAuth Configuration
NEXTAUTH_SECRET=any_random_string_for_security
NEXTAUTH_URL=http://localhost:3000
```

> Tip: An `.env.example` file is included in the repo — copy it and rename to `.env.local`.

### 7. Run the Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build
```bash
npm run build
npm start
```

---

## 📁 Project Structure
```
finwise-ly/
├── src/
│   ├── app/
│   │   ├── api/               # API routes
│   │   ├── components/        # Page-specific components
│   │   ├── context/           # React context providers
│   │   ├── dashboard/         # Dashboard pages
│   │   ├── login/             # Auth pages
│   │   ├── profile-setup/     # Onboarding
│   │   ├── signup/            # Registration
│   │   ├── lib/               # App-specific utilities
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/                # Shared UI components
│   │   ├── charts/            # Chart components
│   │   ├── forms/             # Form components
│   │   └── ...
│   ├── data/
│   │   ├── quiz/              # Quiz questions
│   │   └── tutorials/         # Learning resources
│   ├── hooks/                 # Custom React hooks
│   └── lib/
│       ├── firebase/          # Firebase config
│       ├── auth/              # Auth utilities
│       └── ai/                # AI integration
├── public/                    # Static assets
├── .env.example
└── package.json
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Credits & Acknowledgments

This project was originally scaffolded by Team CodeProwlers and has since been **significantly redesigned, refactored, and extended by Anmol Santwani, including major improvements to the UI, AI integration, goal tracking system, and overall architecture.

Special thanks to:
- The **Next.js** team for the framework
- **Firebase** for backend infrastructure
- **Google AI** for Gemini-powered features
- All open-source contributors whose libraries made this possible

---

<div align="center">

![Stars](https://img.shields.io/github/stars/JyotirmoyDas05/finwise.ly?style=social)
![Forks](https://img.shields.io/github/forks/JyotirmoyDas05/finwise.ly?style=social)
![Contributors](https://img.shields.io/github/contributors/JyotirmoyDas05/finwise.ly)
![Issues](https://img.shields.io/github/issues/JyotirmoyDas05/finwise.ly)

<p>Significantly enhanced and maintained by <strong>Anmol Santwani</strong></p>

</div>
