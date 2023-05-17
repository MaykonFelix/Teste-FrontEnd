import styles from './Button.module.css'

interface ButtonType {
    fruit: string
}

export const Button = ({fruit = "Falta Fruta"}:ButtonType) => {
  return (
    <>
      <button className={styles.container}>
        <p>{fruit}</p>
        <p>+</p>
      </button>
    </>
  );
};
