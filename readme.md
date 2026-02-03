# Stock Management Application

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![.NET 8](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

A full-stack stock management solution featuring an Angular frontend, a .NET 8 Web API backend, and a PostgreSQL database, all orchestrated with Docker Compose.

![Stock Management App](../StockManagementApp/social-preview.png "Stock Management App")
---

## 📂 Project Structure

* **`/backend`**: ASP.NET Core 8 Web API.
    * Uses Entity Framework Core with Npgsql.
    * Features automatic database migrations on startup.
    * Swagger UI for API testing and documentation.
* **`/frontend`**: Angular 17/18+ single-page application.
    * Modular architecture.
    * Configured for production builds using Nginx in Docker.
* **`docker-compose.yml`**: Orchestrates the database, backend, and frontend containers.

---

## 🚀 Quick Start (Docker)

To get the entire stack up and running with a single command:

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd StockManagementApp
    ```

2.  **Launch the containers:**
    ```bash
    docker-compose up -d --build
    ```

3.  **Access the applications:**
    * **Frontend:** [http://localhost:4200](http://localhost:4200)
    * **Backend API:** [http://localhost:5000](http://localhost:5000)
    * **Swagger UI:** [http://localhost:5000/swagger](http://localhost:5000/swagger)

---

## 🛠 Features

* **Database Persistence**: Uses Docker volumes to ensure data survives container restarts.
* **CORS Configuration**: Pre-configured to allow communication between the Angular frontend and the .NET API.
* **Health Checks**: The backend waits for the PostgreSQL database to be fully "Healthy" before attempting to run migrations.

---

## ⚙️ Environment Variables

The project is configured out-of-the-box in `docker-compose.yml`. Key settings include:

| Service | Variable | Purpose |
| :--- | :--- | :--- |
| **db** | `POSTGRES_DB` | Name of the database |
| **backend** | `ConnectionStrings__DefaultConnection` | Database connection string |
| **frontend** | `EXPOSE` | Port 80 (Internal Nginx) |

---

## 🏗 Development Notes

If you make changes to the C# code or the Angular project, rebuild the specific service:
```bash
docker-compose up -d --build backend
# or
docker-compose up -d --build frontend