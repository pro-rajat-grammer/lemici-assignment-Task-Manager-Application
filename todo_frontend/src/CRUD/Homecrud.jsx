import React from "react";
import styles from "./homecrud.module.css";
import { Link } from "react-router-dom";

const Homecrud = () => {
  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>Todo</div>

      {/* Navigation Links */}
      <div className={styles.links}>
        <Link to="/">Create Task</Link>
        <Link to="/tasks">All Tasks</Link>
        <Link to="/tasks?status=pending">Pending</Link>
        <Link to="/tasks?status=completed">Completed</Link>
        <Link to="">Trash</Link>
        <Link to="">About</Link>
      </div>
    </nav>
  );
};

export default Homecrud;
