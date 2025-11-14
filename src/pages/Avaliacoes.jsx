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
          "Content-Type": "application/json",
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
      console.error(err);
    }
  };

  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
      return;
    }
    carregarAvaliacoes();
  }, [token]);

  const excluirAvaliacao = async (id) => {
    if (!confirm("Tem certeza que deseja excluir esta avaliação?")) return;

    try {
      const res = await fetch(`https://api-dungeons-souls.onrender.com/avaliacoes/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        await carregarAvaliacoes();
      } else {
        alert("Erro ao excluir avaliação");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const editarAvaliacao = async (id, avaliacaoAtual) => {
    const novaAvaliacao = prompt("Digite a nova avaliação:", avaliacaoAtual);
    if (!novaAvaliacao || novaAvaliacao.trim() === "") return;

    try {
      const res = await fetch(`https://api-dungeons-souls.onrender.com/avaliacoes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ avaliacao: novaAvaliacao }),
      });

      if (res.ok) {
        await carregarAvaliacoes();
      } else {
        alert("Erro ao atualizar avaliação");
      }
    } catch (err) {
      console.error(err);
    }
  };

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
            <strong>{a.email}</strong> - {a.avaliacao}
            <div>
              <button onClick={() => editarAvaliacao(a.id, a.avaliacao)}>Editar</button>
              <button onClick={() => excluirAvaliacao(a.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

