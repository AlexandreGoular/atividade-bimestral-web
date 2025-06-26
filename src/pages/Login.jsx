import React from "react";
import { Navbar } from "../components/Navbar";
import styles from "../styles/login.module.css";

export class Login extends React.Component {
  componentDidMount() {
    const botao = document.getElementById("botaoLogin");

    if (botao) {
      botao.addEventListener("click", function (e) {
        e.preventDefault();

        const nome = "admin";
        const senha = "123";

        const name = document.getElementById("nome").value;
        const password = document.getElementById("senha").value;

        if (name === nome && password === senha) {
          window.location.href = "/avaliacoes";
        } else {
          alert("Usuário ou senha incorretos!");
        }
      });
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <div className={styles.container}>
          <h1>Login</h1>
          <form>
            <input id="nome" type="text" placeholder="Digite seu Nome" />
            <br />
            <input id="senha" type="password" placeholder="Digite sua Senha" />
            <br />
            <button id="botaoLogin">Entrar</button>
          </form>
        </div>
      </>
    );
  }
}
