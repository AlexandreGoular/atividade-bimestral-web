import React, { useState } from "react";

export function Avaliacao() {
  const [email, setEmail] = useState("");
  const [avaliacao, setAvaliacao] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://dungeons-souls.onrender.com/avaliacoes/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          avaliacao: avaliacao,
        }),
      });

      if (response.ok) {
        setMensagem("Avaliação criada com sucesso!");
        setEmail("");
        setAvaliacao("");
      } else {
        const erro = await response.json();
        setMensagem(`Não foi possível enviar: ${erro.message || ""}`);
      }
    } catch (err) {
      console.error(err);
      setMensagem("Erro ao conectar com a API");
    }
  };

  return (
    <>
      <h1>Criar Avaliação</h1>

      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br />

        <label>Avaliação:</label>
        <input
          type="text"
          value={avaliacao}
          onChange={(e) => setAvaliacao(e.target.value)}
          required
        />

        <br />

        <button type="submit">Enviar</button>
      </form>

      {mensagem && <p>{mensagem}</p>}
    </>
  );
}
