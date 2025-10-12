Here is the content for your **`APPROACH.md`** file, written in very simple English and formatted using Markdown.

---

# APPROACH.md: How I Built the Task Manager

This document explains the main decisions I made while building the simple Task Manager app.

## 1. Why I Chose Python for the Backend

I picked **Python** and a tool called **Django REST Framework (DRF)**.

* **Why?** Python lets me build things **quickly**, and DRF helps keep the code very **clean and organized**.
* **The Database Choice:** I chose a real **database (SQLite)** . This is better because a real app needs to **save your tasks** even when the server shuts down, making the project more **realistic**.

---

## 2. How I Set Up the API (The Web Addresses)

I organized the API around one main topic: **tasks** (`/tasks`).

* **Creating and Fetching:** I used the main address (`/tasks`) for creating new tasks and getting the whole list.
* **Filtering:** To see only "Pending" or "Completed" tasks, I used a **simple question** added to the web address (like `.../tasks?status=pending`). The backend reads this and sends back only the filtered tasks.
* **Updates:** I used **one flexible address** (`PUT /task/<ID>`) for all updates—whether you change the title or just mark it as complete.

---

## 3. How I Manage Data on the Frontend (React)

I built the user interface using **React** and special tools called **Hooks** to manage the data.

* **The Data List:** I used the `useState` tool to hold the main list of tasks that you see on the screen.
* **Staying Updated:** I used the `useEffect` tool to make sure the task list is always **in sync** with the backend. If you click "Pending," the code calls the backend again to get the right list.
* **The Strategy:** After you change a task, the code immediately asks the backend for the **entire, fresh list** again. This guarantees the screen always shows the latest information.

---

## 4. If I Had More Time, What I Would Improve

If I had extra time, I would focus on making the app more powerful and easier to use:

  **Add a "Trash" Feature (Soft Delete) 🗑️**
    * When you click **Delete**, the task wouldn't be erased right away. It would just be given a special tag (`is_deleted = True`) and moved to a hidden **Trash section**.
    * This lets you **recover a task** if you deleted it by mistake. I would add a **"Clear Trash" button** to permanently erase the archived tasks.

