import { Botao } from "../components/Botao";
import { Navbar } from "../components/Navbar";
import { Redes } from "../components/Redes.jsx";

import styles from "../styles/navbar.module.css"

export function Index() {

    const nomeJogo = "Dungeons Souls"

    return (
        <>
            <header>
                    <Navbar />
            </header>

            <main>
                <h1 className={styles.h1}>{ nomeJogo }</h1>
                <p>Dungeons Souls é um jogo desafiador onde você deve upar seu boneco para conseguir matar Boses e assim desbloquear novos itens e passar de fase</p>
                <Botao />
                <Redes />
            </main>

          
        </>
    )
}
