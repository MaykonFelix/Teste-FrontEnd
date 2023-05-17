import styles from "./index.module.css";
import { Button } from "../../components";

export const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Escolha a Fruta</h1>
        <Button fruit="Morando" img="🍓" id={1}/>
        <Button fruit="Kiwi" img="🥝" id={2}/>
        <Button fruit="Banana" img="🍌"id={3} />
      </div>
    </>
  );
};


