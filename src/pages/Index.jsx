import { Botao } from "../components/Botao";
import { Navbar } from "../components/Navbar";

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
            </main>
        </>
    )
}