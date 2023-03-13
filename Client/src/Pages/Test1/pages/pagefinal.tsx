
import React, { useState } from "react";




export default function Paginafinal({ posts, setSizePage, setFruitsPage }) {

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const nextPage = () => {
        if (choiceFruit !== undefined) {
            setFruitsPage(false);
            setSizePage(true);
        } else { setOpen(true); }
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

                    <h1 className="pt-8 text-pink-700">Escolhido</h1>
                    <div className="flex gap-5">

                        <Stack direction="row" spacing={1}>
                            <IconButton color="secondary" aria-label="add to shopping cart" onClick={() => nextPage(choiceFruit)}>
                                <button>{choiceFruit}</button>
                                <AddShoppingCartIcon />
                            </IconButton>
                        </Stack>

                        <Stack spacing={2} sx={{ width: '100%' }}>
                            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                    Escolha uma Fruta!
                                </Alert>
                            </Snackbar>
                        </Stack>

                    </div>
                </div>
            </div>
        </>
    )
}
