import { Navbar } from "../components/Navbar";
import { Avaliacao } from "../components/Avaliacao";
import styles from "../styles/avaliacao.module.css";

export function Avaliacoes() {
  return (
    <>
      <Navbar />
      <div className={styles.topicos}>
        <h1>Email</h1>
        <h1>Avaliação</h1>
      </div>
      <Avaliacao email="xandeaugusto" avaliacao="Jogo muito bom" />
      <Avaliacao email="xandeaugusto" avaliacao="Jogo muito bom" />
    </>
  );
}
