# Simple Task Manager Application 🚀

This is a full-stack application built as an assignment for Lemici, allowing users to manage tasks with titles, descriptions, and completion status.

## 🛠️ Tech Stack

| Component | Technology Used |
| :--- | :--- |
| **Backend** | **Python (Django REST Framework)** |
| **Frontend** | **React (Functional Components, Hooks, and `react-router-dom`)** |
| **Database** | SQLite (Django's default for data persistence) |

## 📦 Project Structure

The code is organized into two main directories:

* **`/backend`**: Contains the Django project and the `tasks` application with models, serializers, and views.
* **`/frontend`**: Contains the React application, including components (`App.jsx`, `Tasks.jsx`, `CreateTask.jsx`, etc.) and the client dependencies.

## ▶️ How to Run the Project

Follow these steps to get the application running on your local machine.

### 1. Setup the Backend (Django)

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  **Install dependencies** (Django and Django REST Framework):
    ```bash
    # It is recommended to use a virtual environment
    pip install django djangorestframework
    ```
3.  **Run migrations** (to set up the SQLite database and create the Task table):
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```
4.  **Run the server:**
    ```bash
    python manage.py runserver
    ```
    The API should now be running on `http://127.0.0.1:8000/`.

### 2. Setup the Frontend (React)

1.  Open a new terminal window and navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2.  **Install dependencies** (React, Axios, React Router, etc.):
    ```bash
    npm install
    ```
3.  **Run the client application:**
    ```bash
    npm start
    ```
    The frontend client should open in your browser (usually on `http://localhost:3000`).

## ⚙️ Available API Endpoints

The Django backend exposes the following endpoints, which are consumed by the React app:

| Method | Path | Description | Frontend Component |
| :--- | :--- | :--- | :--- |
| **POST** | `/tasks` | Add a new task. | `CreateTask.jsx` |
| **GET** | `/tasks` | Fetch all tasks (supports `?status=pending` or `?status=completed` filter). | `Tasks.jsx` |
| **PUT** | `/task/<pk>` | Update an existing task (used for Edit and Toggle Completion). | `EditTask.jsx`, `Tasks.jsx` |
| **DELETE**| `/task/<pk>` | Delete a specific task. | `Tasks.jsx` |
| **GET** | `/task/<pk>` | Fetch a single task by ID. | `EditTask.jsx` |