
import React, { useState } from "react";

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



export default function Frutas({ posts, setSizePage, setFruitsPage }) {

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
                    <h1 className="pb-8 text-pink-700">Escolha a Fruta</h1>
                    <div className="flex">
                        <div className="flex flex-col">

                            {posts.length === 0 ?
                                (<p>Carregando..</p>) :
                                (posts.map((post) => (
                                    <div className="flex items-center justify-around gap-4">
                                        <button
                                            key={crypto.randomUUID()}
                                            onClick={() => setChoiceFruit(post.name)}>
                                            <p> {post.name}</p>
                                        </button>
                                        <img
                                            key={crypto.randomUUID()}
                                            src={post.image}
                                            alt=""
                                            className="w-10"
                                        />

                                    </div>
                                )
                                ))}
                        </div>
                    </div>

                    <h1 className="pt-8 text-pink-700">Escolhido</h1>
                    <div className="flex gap-5">

                        <Stack direction="row" spacing={1}>
                            <IconButton
                            className="gap-4"
                                color="secondary"
                                aria-label="add to shopping cart"
                                onClick={() => nextPage(choiceFruit)}
                            >
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
