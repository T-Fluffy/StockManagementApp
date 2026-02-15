# 📦 StockPro - Enterprise Stock Management Solution

![Angular 18+](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![.NET 8](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![ASP.NET Core Identity](https://img.shields.io/badge/Identity-Security-green?style=for-the-badge)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

StockPro is a modern, full-stack inventory management system built for speed and security. It features a sleek, purple-themed UI, robust JWT authentication, and a scalable containerized architecture.

---

## ✨ Key Features

* **🔐 Secure Authentication**: Full Login/Register flow powered by ASP.NET Identity and JWT (JSON Web Tokens).
* **🎨 Premium UI**: Modern responsive design using Angular Standalone components and SCSS.
* **📊 Real-time Dashboard**: Dynamic inventory tracking and supplier management.
* **⚡ Modern Stack**: .NET 8 Web API with Entity Framework Core (PostgreSQL).
* **🐳 Containerized**: One-click deployment using Docker Compose with built-in Nginx reverse proxy.

---

## 📂 Project Architecture



### 🖥 Frontend (Angular)
- **Standalone Components**: No more bulky NgModules.
- **Interceptors**: Automatic JWT injection into HTTP headers.
- **Guards**: Protected routes to prevent unauthorized access.
- **Styling**: Modular SCSS with a custom purple/indigo design system.

### ⚙️ Backend (.NET 8)
- **Clean Architecture**: Organized by Controllers, Services, and Models.
- **Identity System**: Handles user registration, password hashing, and role management.
- **Migrations**: Automatic PostgreSQL schema updates on container startup.

---

## 🚀 Installation & Setup

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed.

### Quick Start
1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd StockManagementApp
    ```

2.  **Launch the stack:**
    ```bash
    docker-compose up -d --build
    ```

3.  **Access points:**
    - **App**: [http://localhost:4200](http://localhost:4200)
    - **API Docs (Swagger)**: [http://localhost:5000/swagger](http://localhost:5000/swagger)

---

## 🛠 Tech Stack Details

| Layer | Technology | Key Libraries |
| :--- | :--- | :--- |
| **Frontend** | Angular 18 | `rxjs`, `jwt-decode`, `SCSS` |
| **Backend** | .NET 8 Web API | `EF Core`, `Npgsql`, `Identity.EntityFrameworkCore` |
| **Database** | PostgreSQL 16 | Docker Volumes for persistence |
| **DevOps** | Docker | `docker-compose`, `Nginx` |

---

## 🏗 Development Workflow

### Useful Commands
- **Check Logs**: `docker-compose logs -f`
- **Stop System**: `docker-compose down`
- **Reset Database**: `docker-compose down -v` (removes data)

### Environment Configuration
The application is pre-configured to allow CORS between the frontend container (`:4200`) and the backend API (`:5000`). For production, update the `environment` section in `docker-compose.yml`.

---

## 📝 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.