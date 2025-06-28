# System Architecture Diagram (Placeholder)

Below is a simple text-based architecture diagram for GlobalInvestSoft. Replace with a visual diagram as needed.

```
+-------------------+         +-------------------+         +-------------------+
|   React Frontend  | <-----> |   NestJS Backend  | <-----> |   PostgreSQL DB   |
|  (Vite, TS, UI)   |  REST   | (API, Auth, WS)   |  Prisma |                   |
+-------------------+         +-------------------+         +-------------------+
         |                            |                              |
         |                            |                              |
         |                            v                              |
         |                  +-------------------+                   |
         |                  |      Redis        | <-----------------+
         |                  | (Cache, RateLimit)|
         |                  +-------------------+
         |                            |
         |                            v
         |                  +-------------------+
         |                  |  External APIs    |
         |                  | (Alpha Vantage,   |
         |                  |  Stripe, etc.)    |
         |                  +-------------------+
```

- **WebSocket**: Real-time price updates from backend to frontend
- **Admin Panel**: React dashboard (role-based access)
- **CRON**: Backend fetches price data every 15 min
