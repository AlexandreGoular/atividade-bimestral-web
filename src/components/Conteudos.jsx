const textoWorld = "Explore um vasto mundo";
const textoInimigos = "Enfrente diversos inimigos";
const textoHistoria = "Desfrute de uma historia magica";

import foto from "../assets/celeste.jpg";
import styles from "../styles/index.module.css";

export function Conteudos() {
  return (
    <>
      <div className={styles.conteudos}>
      <div className={styles.world}>
        <img src={foto} className={styles.foto1} />
        <h2>{textoWorld}</h2>
      </div>
      <div className={styles.inimigo}>
        <img src={foto} className={styles.foto1} />
        <h2>{textoInimigos}</h2>
      </div>
      <div className={styles.historia}>
        <img src={foto} className={styles.foto1} />
        <h2>{textoHistoria}</h2>
      </div>
      </div>
    </>
  );
}
