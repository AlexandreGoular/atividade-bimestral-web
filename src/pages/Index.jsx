import { Botao } from "../components/Botao";
import { Navbar } from "../components/Navbar";
import { Redes } from "../components/Redes.jsx";

export function Index() {

    const nomeJogo = "Dungeons Souls"

    return (
        <>
            <header>
                    <Navbar />
            </header>

            <main>
                <h1>{ nomeJogo }</h1>
                <Botao />
                <Redes />
            </main>

          
        </>
    )
}
