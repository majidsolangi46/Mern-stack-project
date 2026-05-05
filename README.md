# Portfolio Backend

This backend is a small Node.js API for the portfolio contact form.
It stores contact messages in MongoDB.

## Setup

Create a `.env` file inside `backend/`:

```txt
PORT=5000
FRONTEND_URL=http://127.0.0.1:4173
MONGODB_URI=mongodb://127.0.0.1:27017
MONGODB_DB_NAME=portfolio_db
```

For MongoDB Atlas, replace `MONGODB_URI` with your Atlas connection string.

## Run

```bash
npm run dev
```

## Routes

```txt
GET  /api/health
POST /api/contact
GET  /api/contact
```
