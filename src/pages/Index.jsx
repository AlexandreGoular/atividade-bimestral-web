import { Botao } from "../components/Botao";
import { Navbar } from "../components/Navbar";
import { Redes } from "../components/Redes.jsx";
import { Conteudos } from "../components/Conteudos.jsx";
import { Avaliacao } from "../pages/Avaliacao.jsx"

import styles from "../styles/index.module.css";

export function Index() {
  const nomeJogo = "Dungeons Souls";
  const [primeiraPalavra, segundaPalavra] = nomeJogo.split(" ");

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className={styles.container}>
        <h1 className={styles.h1}>
          {primeiraPalavra}
          <br />
          <span className={styles.souls}>{segundaPalavra}</span>
        </h1>
        <p>
          Dungeons Souls é um jogo desafiador onde você deve upar seu boneco
          para conseguir matar Boses e assim desbloquear novos itens e passar de
          fase
        </p>
        <Botao />
        <Redes />
      </main>

      
      
      <footer>
        <Avaliacao />
      </footer>
    </>
  );
}
