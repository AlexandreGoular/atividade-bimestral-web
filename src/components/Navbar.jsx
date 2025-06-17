import styles from "../styles/navbar.module.css"

export function Navbar() {
    
    return (
        <>
        <div className={styles.navbar}>
          <a href="#">Home</a>
          <a href="#">On</a>
          <a href="#">Download</a>
          <a href="#">Assentment</a>
          <a href="#">Admin</a>
        </div>
        </>
  )
}
