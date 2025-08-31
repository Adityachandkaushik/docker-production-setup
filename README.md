# Dockerized MERN Student Portal

This is a **production-ready MERN stack Student Portal** application. It’s fully containerized using Docker and Docker Compose for streamlined deployment and local orchestration.

## ⭐ Features
-  Dockerized backend (Node.js + Express) and frontend (React)
-  MongoDB integration with sample data seeding
-  One-click start via Docker Compose
-  Environment variable configuration via `.env`
-  Persistent volumes for data durability
-  Production-grade build using `npm run build` (served via Nginx or static server)

##  Architecture & Tech Stack
- **Frontend**: React.js (production build)
- **Backend**: Node.js + Express
- **Database**: MongoDB with seed script
- **Containerization**: Docker, Docker Compose
Optionally, later include:
- **Reverse Proxy**: Nginx
- **Orchestration**: Kubernetes (Minikube)
- **Monitoring**: Prometheus + Grafana

##  Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/Adityachandkaushik/docker-production-setup.git
   cd docker-production-setup

docker-compose up --build -d
