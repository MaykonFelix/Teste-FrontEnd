
import { useState } from "react";

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function Frutas({ posts, setSizePage, setFruitsPage }) {

    const nextPage = () => {
        console.log(choiceFruit)
        if (choiceFruit !== undefined) {
            setFruitsPage(false);
            setSizePage(true);
        }
    }

    const [choiceFruit, setChoiceFruit] = useState();

    return (
        <>
            <div className="bg-slate-100 w-screen h-screen flex flex-col justify-center items-center">
                <div className="shadow-lg shadow-pink-500/30 hover:bg-pink-200/20 duration-500 text-slate-500 w-[35rem] h-screen rounded-lg m-2 justify-center items-center flex flex-col">

                    {/* Escolha a Fruta */}
                    <h1 className="pb-8 text-pink-700">Fruta</h1>
                    <div className="flex">
                        <div className="flex flex-col">

                            <h2>Frutas:</h2>

                            {posts.length === 0 ?
                                (<p>Carregando..</p>) :
                                (posts.fruta.map((post) => (
                                    <button
                                        className="flex p-2 gap-4"
                                        key={crypto.randomUUID()}
                                        onClick={() => setChoiceFruit(post.name)}
                                    >
                                        {post.name}
                                    </button>)
                                ))}
                        </div>
                    </div>

                    <h1 className="pt-8 text-pink-700">Pedido</h1>
                    <div className="flex gap-5">



                        <Stack direction="row" spacing={1}>
                            <IconButton color="secondary" aria-label="add to shopping cart" onClick={() => nextPage(choiceFruit)}>
                                <button>{choiceFruit}</button>
                                <AddShoppingCartIcon />
                            </IconButton>
                        </Stack>

                    </div>
                </div>
            </div>
        </>
    )
}
