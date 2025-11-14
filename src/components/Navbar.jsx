import styles from "../styles/navbar.module.css";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <Link to="/">Home</Link>
        <a href="#on">On</a>
        <a href="/">Download</a>
        <a href="#avaliacao">Assentment</a>
        <a href="/login">Admin</a>
      </div>
    </>
  );
}
