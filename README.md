# GlobalInvestSoft

GlobalInvestSoft is a modern, scalable full-stack investment web app starter. It features a React + Vite + TypeScript frontend and a NestJS + TypeScript backend, with PostgreSQL, Prisma, Redis, JWT authentication, and real-time updates via Socket.IO. The UI is professional, clean, and blue-themed.

## Features
- Secure user authentication (email/password, JWT)
- Real-time asset price updates
- Portfolio tracking with charts and analytics
- Admin panel for asset/user management
- Modular, scalable architecture

## Tech Stack
- **Frontend:** React, Vite, TypeScript, Tailwind CSS, Zustand, Recharts
- **Backend:** NestJS, TypeScript, Prisma, PostgreSQL, Redis, Socket.IO
- **Security:** JWT, bcrypt, Helmet, CORS, rate limiting

## Getting Started

### Frontend
```sh
cd frontend
npm install
npm run dev
```

### Backend
```sh
cd backend
npm install
npm run start:dev
```

## Environment Variables
See `.env.example` in each folder for required configuration.

## License
MIT
