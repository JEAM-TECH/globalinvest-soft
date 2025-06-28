# PostgreSQL Setup for GlobalInvestSoft

1. **Install PostgreSQL**
   - Download and install from https://www.postgresql.org/download/
   - Set a password for the `postgres` user during installation.

2. **Create Database**
   - Open `psql` (PostgreSQL shell) or use a GUI like pgAdmin.
   - Run:
     ```sql
     CREATE DATABASE globalinvestsoft;
     ```

3. **Configure .env**
   - In `backend/.env`, set:
     ```env
     DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/globalinvestsoft
     ```

4. **Start PostgreSQL Service**
   - Ensure the PostgreSQL service is running (check Services app on Windows).

5. **Run Migration**
   - In the `backend` folder, run:
     ```sh
     npx prisma migrate dev --name init
     ```

If you need a custom port, update the port in `DATABASE_URL` accordingly.
