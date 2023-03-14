
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


export default function Tamanho({ posts, setSizePage, setcomplementoPage }) {

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
        console.log(choiceSize)
        if (choiceSize.length !== 0) {
            setSizePage(false);
            setcomplementoPage(true);
        } else { setOpen(true); }
    }

    const [choiceSize, setchoiceSize] = useState([]);

    return (
        <>
            <div className="bg-slate-100 w-screen h-screen flex flex-col justify-center items-center">
                <div className="shadow-lg shadow-pink-500/30 hover:bg-pink-200/20 duration-500 text-slate-500 w-[35rem] h-screen rounded-lg m-2 justify-center items-center flex flex-col">

                    {/* Escolha a Fruta */}
                    <h1 className="pb-8 text-pink-700">Tamanho</h1>
                    <div className="flex">
                        <div className="flex flex-col">

                            <h2>Tamanho:</h2>

                            {posts.length === 0 ?
                                (<p>Carregando..</p>) :
                                (posts.sizeCup.map((post) => (
                                    <button
                                        className="flex p-2 gap-4"
                                        key={crypto.randomUUID()}
                                        onClick={() => setchoiceSize([post.name, post.price])}
                                    >
                                        <p> {post.name}</p>
                                        <p>R$ {post.price},00</p>
                                    </button>)
                                ))}
                        </div>
                    </div>

                    <h1 className="pt-8 text-pink-700">Ordem de Pedidos</h1>
                    <div className="flex gap-5">


                        <Stack direction="row" spacing={1}>
                            <IconButton color="secondary" aria-label="add to shopping cart" onClick={() => nextPage(choiceSize)}>
                                <button>
                                    {choiceSize[0]}
                                    R$ {choiceSize[1]}
                                </button>
                                <AddShoppingCartIcon />
                            </IconButton>
                        </Stack>

                        <Stack spacing={2} sx={{ width: '100%' }}>
                            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                    Escolha um Tamanho!
                                </Alert>
                            </Snackbar>
                        </Stack>

                    </div>
                </div>
            </div>
        </>
    )
}
