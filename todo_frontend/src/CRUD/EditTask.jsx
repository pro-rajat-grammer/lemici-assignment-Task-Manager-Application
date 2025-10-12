import React, { useEffect, useState } from "react";
import styles from "./homecrud.module.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/task/${index}`)
      .then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
      })
      .catch(() => {
        console.log("Something went wrong");
      });
  }, [index]);

  const formHandle = (e) => {
    e.preventDefault();
    const payload = { title, description };

    axios
      .put(`http://127.0.0.1:8000/api/task/${index}`, payload)
      .then(() => {
        console.log("Data has been updated");
        navigate("/tasks");
      })
      .catch(() => {
        console.log("Something went wrong");
      });
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={formHandle} className={styles.formBox}>
        <h1 className={styles.updateTitle}>UPDATE TASK</h1>

        <label className={styles.label}>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
        />

        <label className={styles.label}>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles.textarea}
          rows={4}
        ></textarea>

        <button type="submit" className={styles.submitBtn}>
          Update
        </button>
      </form>
    </div>
  );
};

export default EditTask;
