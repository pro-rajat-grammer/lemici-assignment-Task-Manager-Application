import React, { useState } from "react";
import styles from "./homecrud.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateTasks = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const formHandle = (e) => {
    e.preventDefault();
    const payload = { title, description };

    axios.post("http://127.0.0.1:8000/api/tasks", payload)
      .then(() => {
        console.log("Data has been saved");
        navigate("/tasks");
      })
      .catch(() => {
        console.log("Data has not been saved");
      });
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={formHandle} className={styles.formBox}>

        <label className={styles.label}>Title</label>
        <input type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} className={styles.input} />

        <label className={styles.label}>Description</label>
        <textarea placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} className={styles.textarea} rows={4} ></textarea>

        <button type="submit" className={styles.submitBtn}>Submit</button>

      </form>
    </div>
  );
};

export default CreateTasks;
