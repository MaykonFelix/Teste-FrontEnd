import { useState } from "react";

interface FrutasPropsType {
  postsFruit: string;
  setFruitsPage: () => void;
  setSizePage: () => void;
}

export default function Frutas({
  postsFruit,
  setSizePage,
  setFruitsPage,
}: FrutasPropsType) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const nextPage = () => {
    if (choiceFruit !== undefined) {
      setFruitsPage(false);
      setSizePage(true);
    } else {
      setOpen(true);
    }
  };

  const [choiceFruit, setChoiceFruit] = useState();

  return (
    <>
      <div className="bg-slate-100 w-screen h-screen flex flex-col justify-center items-center">
        <div className="shadow-lg shadow-pink-500/30 hover:bg-pink-200/20 duration-500 text-slate-500 w-[35rem] h-screen rounded-lg m-2 justify-center items-center flex flex-col">
          <h1 className="pb-8 text-pink-700">Escolha a Fruta</h1>
          <div className="flex">
            <div className="flex flex-col">
              {postsFruit.length === 0 ? (
                <p>Carregando..</p>
              ) : (
                postsFruit.map((post) => (
                  <div className="flex items-center justify-around gap-4">
                    <button
                      key={crypto.randomUUID()}
                      onClick={() => setChoiceFruit(post.name)}
                    >
                      <p> {post.name}</p>
                    </button>
                    <img
                      key={crypto.randomUUID()}
                      src={post.image}
                      alt=""
                      className="w-10"
                    />
                  </div>
                ))
              )}
            </div>
          </div>

          <h1 className="pt-8 text-pink-700">Escolhido</h1>

          <label htmlFor="btn1" className="cursor-pointer">
            {choiceFruit}
          </label>
        </div>
      </div>
    </>
  );
}
