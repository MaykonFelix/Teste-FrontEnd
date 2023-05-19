import { useState } from "react";

import { Button } from "../../components";

import styles from "./index.module.css";

const fruit = [
  { id: 1, name: "Morango", img: "🍓" },
  { id: 2, name: "Kiwi", img: "🍓" },
  { id: 3, name: "Banana", img: "🍓" },
];

export const Home = () => {
  const [choseFruit, setChoseFruit] = useState("");
  console.log(choseFruit);

  return (
    <>
      <div className={styles.container}>
        <div>
          <h1>Escolha a Fruta</h1>
          <hr />
        </div>

        <div className={styles.containerBtn}>
          {fruit.map((itens) => {
            return (
              <Button
                key={itens.id}
                onClick={() => setChoseFruit(itens.name + itens.img)}
              >
                <p>{itens.name}</p>
                <p>{itens.img}</p>
              </Button>
            );
          })}
        </div>

        <hr />

        {choseFruit === "" ? null : (
          <div className={styles.choiseFruit}>
            <div>
              <h4>
                Fruta Escolhida: <em>{choseFruit}</em>
              </h4>
              <button onClick={() => setChoseFruit("")}>X</button>
            </div>

            <div>
              <Button onClick={() => setChoseFruit("Banana 🍌")}>
                <p>Continuar</p>
                <p>👉</p>
              </Button>
            </div>
          </div>
        )}

        {choseFruit === "" ? null : (
          <>
            <hr />
            <div className={styles.footer}>
              <div>
                <p>Fruta</p>
                <p>{choseFruit}</p>
                <button onClick={() => setChoseFruit("")}>X</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
