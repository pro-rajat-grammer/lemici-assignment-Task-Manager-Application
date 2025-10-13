import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./homecrud.module.css";
import { Link, useLocation } from "react-router-dom";

const Tasks = () => {
  const [content, setContent] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchData();
  }, [location]);

  const fetchData = () => {
    const params = new URLSearchParams(location.search);
    const status = params.get("status");

    let url = "http://127.0.0.1:8000/api/tasks";
    if (status) {
      url += `?status=${status}`;
    }

    axios.get(url)
      .then((response) => setContent(response.data))
      .catch(() => console.log("Error fetching data"));
  };

  const deleteTask = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/task/${id}`)
      .then(() => fetchData())
      .catch(() => console.log("Error deleting task"));
  };

  const toggleCompleted = (task) => {
    axios.put(`http://127.0.0.1:8000/api/task/${task.id}`, {
      completed: !task.completed,
    })
      .then(() => fetchData())
      .catch(() => console.log("Error updating task"));
  };

  return (
    <div className={styles.listContainer}>
      {content.length === 0 ? (
        <div className={styles.noTask}>No Tasks Available</div>
      ) : (
        <table className={styles.listTable}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Toggle</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {content.map((task, index) => (
              <tr key={task.id}>
                {/* Use index + 1 for serial number */}
                <td>{index + 1}</td>
                <td className={styles.boldTitle}>{task.title}</td>
                <td className={styles.descCell}>{task.description}</td>
                <td>{task.completed ? "✅ Completed" : "🕒 Pending"}</td>
                <td>
                  <input type="checkbox" checked={task.completed} onChange={() => toggleCompleted(task)} />
                </td>
                <td>
                  <button className={styles.buttons} onClick={() => deleteTask(task.id)} >Delete </button>
                  <Link to={`/edit/${task.id}`}> <button className={styles.buttons}>Edit</button></Link>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      )}
    </div>
  );
};

export default Tasks;
