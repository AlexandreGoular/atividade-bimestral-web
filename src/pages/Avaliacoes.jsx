import { Navbar } from "../components/Navbar";
import { Avaliacao } from "../components/Avaliacao";
import styles from "../styles/avaliacao.module.css";
import { useEffect, useState } from "react";

export function Avaliacoes() {
  const [avaliacoes, setAvaliacoes] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
      return;
    }

    fetch("https://api-dungeons-souls.onrender.com/avaliacoes/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (res.status === 401 || res.status === 422) {
          localStorage.removeItem("token");
          window.location.href = "/login";
          return;
        }

        const data = await res.json().catch(() => null);
        if (data) setAvaliacoes(data);
      })
      .catch(console.error);
  }, [token]);

  return (
    <>
      <Navbar />
      <div className={styles.topicos}>
        <h1>Email</h1>
        <h1>Avaliação</h1>
      </div>
      <ul>
        {avaliacoes.map((a) => (
          <li key={a.id}>
            {a.email} - {a.avaliacao}
          </li>
        ))}
      </ul>
      <Avaliacao email="xandeaugusto" avaliacao="Jogo muito bom" />
      <Avaliacao email="xandeaugusto" avaliacao="Jogo muito bom" />
    </>
  );
}
