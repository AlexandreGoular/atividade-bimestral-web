import React from "react";
import { Navbar } from "../components/Navbar";
import styles from "../styles/login.module.css";
import { useState } from "react"


export function Login() {
  const [nome, setNome] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("https://api-dungeons-souls.onrender.com/avaliacoes/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: nome, senha: senha })
      })

      if (!res.ok) throw new Error("Login invalido")
      const data = await res.json()

      localStorage.setItem("token", data.token)
      window.location.href = "/avaliacoes"
    } catch (err) {
      setErro(err.message)
    }
  }

  return(
    <>
      <Navbar />

      <form onSubmit={handleLogin}>
        <input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input placeholder="Senha" value={senha} type="password" onChange={(e) => setSenha(e.target.value)} />
        <button type="submit">Entrar</button>
      </form>
      </>
    )
  
}
