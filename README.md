# Bushi - Job Application Tracker

A full-stack web application for tracking job applications, built with React frontend and Node.js backend, deployed on Vercel.

## 🚀 Live Demo

- **Frontend**: [https://bushi-app.vercel.app](https://bushi-app.vercel.app)
- **Backend API**: [https://bushi-app.vercel.app/api](https://bushi-app.vercel.app/api)
- **API Health Check**: [https://bushi-app.vercel.app/api/health](https://bushi-app.vercel.app/api/health)

## 📋 Features

- ✅ User Registration & Authentication
- ✅ Job Application Tracking
- ✅ Firebase Firestore Database
- ✅ JWT Token Security
- ✅ Responsive Design
- ✅ Deployed on Vercel

## 🛠 Tech Stack

**Frontend:**
- React 18 + Vite
- React Router DOM
- Axios for API calls
- React Toastify
- CSS3

**Backend:**
- Node.js + Express.js
- Firebase Admin SDK
- JWT Authentication
- bcryptjs Password Hashing
- CORS Enabled

**Deployment:**
- Vercel (Frontend & Backend)
- Firebase Firestore (Database)

## 🏗 Project Structure

\\\
bushi-app/
├── frontend/                 # React Vite App
│   ├── src/
│   ├── public/
│   ├── vercel.json          # Vercel config
│   └── package.json
├── backend/                  # Node.js API
│   ├── api/                 # Serverless functions
│   ├── config/              # Firebase config
│   ├── routes/              # API routes
│   ├── middleware/          # Auth middleware
│   ├── vercel.json          # Vercel config
│   └── package.json
└── README.md
\\\

## 🚀 Quick Start

### Local Development

1. **Clone repository**
   \\\ash
   git clone https://github.com/YOUR_USERNAME/bushi-app.git
   cd bushi-app
   \\\

2. **Backend Setup**
   \\\ash
   cd backend
   npm install
   # Add .env file with Firebase credentials
   npm run dev
   \\\

3. **Frontend Setup**
   \\\ash
   cd frontend  
   npm install
   # Add .env file with API URL
   npm run dev
   \\\

## 🌐 API Endpoints

- \POST /api/auth/register\ - User registration
- \POST /api/auth/login\ - User login  
- \GET /api/applications\ - Get applications (protected)
- \POST /api/applications\ - Create application (protected)
- \GET /api/health\ - API health check

## 🔧 Environment Variables

### Backend (.env)
\\\
JWT_SECRET=your-jwt-secret
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY_ID=your-private-key-id
FIREBASE_PRIVATE_KEY=your-private-key
FIREBASE_CLIENT_EMAIL=your-client-email
FIREBASE_CLIENT_ID=your-client-id
FIREBASE_CLIENT_CERT_URL=your-cert-url
\\\

### Frontend (.env)
\\\
VITE_API_BASE_URL=http://localhost:5000/api
\\\

## 📦 Deployment

This project is deployed on **Vercel**:

1. **Frontend**: SPA hosted on Vercel
2. **Backend**: Serverless functions on Vercel
3. **Database**: Firebase Firestore

## 👤 Author

**Your Name**
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)

## 📄 License

MIT License - see LICENSE file for details.
