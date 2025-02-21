# DevStage 🎤

**DevStage** is a referral software designed to be used during online events. It allows participants to make and receive referrals in real-time, providing an interactive and engaging experience.

## 🚀 Technologies Used

- **Node.js** - JavaScript runtime environment on the server-side
- **TypeScript** - Static typing for more robust code
- **Fastify** - Fast and efficient web framework
- **PostgreSQL** - High-performance relational database
- **Redis** - Cache storage and real-time messaging
- **Docker** - Containers to simplify development and deployment

> 🔗 There is also a front-end repository available at [estherpeixoto/nextjs-devstage](https://github.com/estherpeixoto/nextjs-devstage)

## 📦 How to Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/estherpeixoto/nodejs-devstage.git
   cd nodejs-devstage
   ```

2. **Configure environment variables:**
   Create a `.env` file in the project's root with the following settings:
   ```
   # server port
   PORT=3333

   # database
   REDIS_URL="redis://default:docker@localhost:6379"
   REDIS_MASTER_PASSWORD=docker
   REDIS_PASSWORD=docker
   POSTGRES_URL="postgresql://docker:docker@localhost:5432/connect"
   POSTGRES_USER=docker
   POSTGRES_PASSWORD=docker
   POSTGRES_DB=connect

   # front-end
   WEB_URL="http://localhost:3000"
   ```

3. **Start services with Docker:**
   ```bash
   docker-compose up -d
   ```

4. **Access the app:**
   The server will be available at [http://localhost:3333](http://localhost:3333).

## 🛠️ Available Scripts

- `npm run dev`: Starts the server in development mode
- `npm run db:init`: Generate the database and run migrations using drizzle-kit
- `npm run build`: Compiles the TypeScript project
- `npm run test`: Runs automated tests

## 📖 API Documentation

The project automatically generates API documentation using Fastify with Swagger. You can access the full documentation at: [http://localhost:3333/docs](http://localhost:3333/docs).

## 🤝 Contributing

Contributions are welcome! Follow the steps below:

1. Fork the project
2. Create a branch for your feature: `git checkout -b my-feature`
3. Commit your changes: `git commit -m 'My new feature'`
4. Push to the branch: `git push origin my-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ by [Esther Peixoto](https://github.com/estherpeixoto)
