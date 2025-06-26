import styles from "../styles/avaliacao.module.css";

export const Avaliacao = ({ email, avaliacao }) => {
  return (
    <>
      <div className={styles.avaliacao}>
        <h3>{email}</h3>
        <p>{avaliacao}</p>
      </div>
    </>
  );
};
