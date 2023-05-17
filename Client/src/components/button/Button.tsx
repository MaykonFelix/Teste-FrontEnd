import { Fragment } from "react";
import styles from "./Button.module.css";

interface ButtonType {
  fruit: string;
  img: string;
  id: number;
}

export const Button = ({
  fruit = "Falta Fruta",
  img = "falta imagem",
  id = 0,
}: ButtonType) => {
  return (
    <Fragment key={id}>
      <button className={styles.container}>
        <p>{fruit}</p> <p>{img}</p>
      </button>
    </Fragment>
  );
};
