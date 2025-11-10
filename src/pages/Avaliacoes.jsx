import { Navbar } from "../components/Navbar";
import styles from "../styles/avaliacao.module.css";
import { useEffect, useState } from "react";

export function Avaliacoes() {
  const [avaliacoes, setAvaliacoes] = useState([]);
  const token = localStorage.getItem("token");

  const carregarAvaliacoes = async () => {
    try {
      const res = await fetch("https://api-dungeons-souls.onrender.com/avaliacoes/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401 || res.status === 422) {
        localStorage.removeItem("token");
        window.location.href = "/login";
        return;
      }

      const data = await res.json();
      setAvaliacoes(data);
    } catch (err) {
      console.error("Erro ao carregar avaliações:", err);
    }
  };

  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
      return;
    }

    carregarAvaliacoes();

    const interval = setInterval(() => {
      carregarAvaliacoes();
    }, 5000);

    return () => clearInterval(interval);
  }, [token]);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.topicos}>
          <h1>Email</h1>
          <h1>Avaliação</h1>
        </div>

        <ul className={styles.lista}>
          {avaliacoes.length === 0 ? (
            <p>Nenhuma avaliação encontrada.</p>
          ) : (
            avaliacoes.map((a) => (
              <li key={a.id}>
                <strong>{a.email}</strong> — {a.avaliacao}
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}

