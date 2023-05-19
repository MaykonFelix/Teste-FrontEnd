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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", gap: "20px" }}>
              <h3>Fruta Escolhida</h3>
              <p>{choseFruit}</p>
              <button
                style={{ border: "none", fontWeight: "bold" }}
                onClick={() => setChoseFruit("")}
              >
                x
              </button>
            </div>
          <Button onClick={() => setChoseFruit("Banana 🍌")}>
            <p>Continuar</p>
            <p>👉</p>
          </Button>
          </div>
        )}
      </div>
    </>
  );
};
