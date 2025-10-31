# --- Base image ---
FROM node:20-bullseye

# --- Working directory inside container ---
WORKDIR /app/api

# --- Copy dependency files first for caching ---
COPY package*.json ./

# --- Install dependencies ---
RUN npm install --omit=dev

# --- Copy the rest of the app ---
COPY . .

# --- Expose port 8080 ---
EXPOSE 8080

# --- Start Fastify server ----
CMD ["npm", "start"]
