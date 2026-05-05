import "dotenv/config";
import http from "node:http";
import { connectDB } from "./config/db.js";
import {
  handleCreateContactMessage,
  handleGetContactMessages,
} from "./controllers/contactController.js";
import { sendJson } from "./utils/http.js";

const PORT = Number(process.env.PORT || 5000);
const HOST = process.env.HOST || "127.0.0.1";
const FRONTEND_URL = process.env.FRONTEND_URL || "http://127.0.0.1:4173";

const corsHeaders = {
  "Access-Control-Allow-Origin": FRONTEND_URL,
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const server = http.createServer(async (request, response) => {
  if (request.method === "OPTIONS") {
    response.writeHead(204, corsHeaders);
    response.end();
    return;
  }

  if (request.method === "GET" && request.url === "/api/health") {
    sendJson(
      response,
      200,
      {
        success: true,
        message: "Portfolio backend is running.",
        database: "MongoDB",
      },
      corsHeaders
    );
    return;
  }

  if (request.method === "POST" && request.url === "/api/contact") {
    await handleCreateContactMessage(request, response, corsHeaders);
    return;
  }

  if (request.method === "GET" && request.url === "/api/contact") {
    await handleGetContactMessages(response, corsHeaders);
    return;
  }

  sendJson(
    response,
    404,
    {
      success: false,
      error: "Route not found.",
    },
    corsHeaders
  );
});

try {
  await connectDB();
  server.listen(PORT, HOST, () => {
    console.log(`Portfolio backend running at http://${HOST}:${PORT}`);
  });
} catch (error) {
  console.error("Backend failed to start:", error.message);
  process.exit(1);
}
