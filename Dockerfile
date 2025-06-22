# First stage: build the application
FROM node:20 AS builder

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Compile with tsup
RUN npm run build

# Second stage: create the production image
FROM node:20-slim

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3333

# Expose the application port
EXPOSE 3333

# Start the application
CMD ["node", "dist/server.mjs"]