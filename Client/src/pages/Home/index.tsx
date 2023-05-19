import { useState } from "react";

import { Button } from "../../components";

import styles from "./index.module.css";

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
          <Button onClick={() => setChoseFruit("Morango 🍓")}>
            <p>Morango</p>
            <p>🍓</p>
          </Button>
          <Button onClick={() => setChoseFruit("Kiwi 🥝")}>
            <p>Kiwi</p>
            <p>🥝</p>
          </Button>
          <Button onClick={() => setChoseFruit("Banana 🍌")}>
            <p>Banana</p>
            <p>🍌</p>
          </Button>
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
                <button>X</button>
              </div>
              {/* 
              <div>
                <p>Fruta</p>
                <p>{choseFruit}</p>
                <button>X</button>
              </div>

              <div>
                <p>Fruta</p>
                <p>{choseFruit}</p>
                <button>X</button>
              </div> */}
            </div>
          </>
        )}
      </div>
    </>
  );
};
