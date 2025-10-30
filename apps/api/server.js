// server.js
import Fastify from "fastify";

const app = Fastify({ logger: true });

// --- Routes ---
app.get("/health", async () => {
  return { ok: true };
});

// --- Start server ---
const start = async () => {
  try {
    await app.listen({ port: 8080, host: "0.0.0.0" });
    console.log("✅ API running on port 8080");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

// --- Graceful shutdown ---
const closeGracefully = async (signal) => {
  app.log.info(`Received signal to terminate: ${signal}`);
  try {
    await app.close();
    app.log.info("Server closed cleanly. Goodbye!");
    process.exit(0);
  } catch (err) {
    app.log.error("Error closing server:", err);
    process.exit(1);
  }
};

process.on("SIGINT", closeGracefully);
process.on("SIGTERM", closeGracefully);
