import styles from "./index.module.css";

export const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className="pb-8 text-pink-700">Escolha a Fruta</h1>
        <ul>
          <li>morango</li>
          <li>kiwi</li>
          <li>manga</li>
        </ul>
      </div>
    </>
  );
};

// <div className="bg-slate-100 w-screen h-screen flex flex-col justify-center items-center">
// <div className="shadow-lg shadow-pink-500/30 hover:bg-pink-200/20 duration-500 text-slate-500 w-[35rem] h-screen rounded-lg m-2 justify-center items-center flex flex-col">
//   <h1 className="pb-8 text-pink-700">Escolha a Fruta</h1>
//   <div className="flex">
//     <div className="flex flex-col">
