import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const nextPage = () => {
  if (choiceFruit !== undefined) {
    setFruitsPage(false);
    setSizePage(true);
  } else {
  }
};

export default function Complemento({ postsComplement }) {
  const [choiceFruit, setChoiceFruit] = useState();

  return (
    <>
      <div className="bg-slate-100 w-screen h-screen flex flex-col justify-center items-center">
        <div className="shadow-lg shadow-pink-500/30 hover:bg-pink-200/20 duration-500 text-slate-500 w-[35rem] h-screen rounded-lg m-2 justify-center items-center flex flex-col">
          <h1 className="pb-8 text-pink-700">Complemento</h1>
          <div className="flex">
            <div className="flex flex-col">
              {postsComplement.length === 0 ? (
                <p>Carregando...</p>
              ) : (
                postsComplement.map((post) => (
                  <div className="flex items-center justify-around gap-4">
                    <button
                      className="flex p-2 gap-4"
                      key={crypto.randomUUID()}
                      onClick={() => setChoiceFruit(post.name)}
                    >
                      {post.name}
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

          <div className="flex items-center gap-5">
            <Stack direction="row" spacing={1}>
              <IconButton
                className="gap-4"
                id="btn1"
                color="secondary"
                aria-label="add to shopping cart"
                onClick={() => nextPage(choiceFruit)}
              >
                <AddShoppingCartIcon />
              </IconButton>
            </Stack>
            <label for="btn1" className="cursor-pointer">
              {choiceFruit}
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
