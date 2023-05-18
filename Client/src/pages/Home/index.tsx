import { useState } from "react";

import { Button } from "../../components";

import styles from "./index.module.css";

export const Home = () => {
  const [choseFruit, setChoseFruit] = useState("Sem Fruta");


  return (
    <>
      <div className={styles.container}>
        <div>
          <h1>Escolha a Fruta</h1>
        </div>
        <div>
          <Button onClick={() => setChoseFruit("morango")}>
            <p>Morango</p> <p>🍓</p>
          </Button>

          {/* <Button
            fruit="Kiwi"
            img="🥝"
            id={2}
            onClick={() => setChoseFruit("Kiwi")}
          />
          <Button
            fruit="Banana"
            img="🍌"
            id={3}
            onClick={() => setChoseFruit("Banana")}
          /> */}
        </div>
        <div>
          <h1>Fruta Escolhida</h1>
          <p>{choseFruit}</p>
        </div>
      </div>
    </>
  );
};
