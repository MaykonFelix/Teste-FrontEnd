import { useEffect, useState } from "react";
import api from "../components/axios";

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import './Pedidos.css'


const steps = [
    'Pedido',
    'Preparando',
    'Finalizado',
];

function Pedidos() {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            const response = await api.get('/api/pedido');
            var data = response.data;
            setPosts(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])


    return (
        <>
            <div className="bg-slate-100 w-screen h-screen flex flex-col justify-center items-center">

                <div className="shadow-lg shadow-pink-500/30 hover:bg-pink-200/20 duration-500 text-white w-[35rem] h-screen rounded-lg m-2 justify-center items-center flex flex-col">

                    <Box sx={{ width: '60%' }}>
                        <Stepper activeStep={0} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>

                    <div className="home flex text-center flex-col gap-2 p-12">


                        <h1 className="uppercase tracking-widest text-slate-500 border-b-2 border-pink-500 pt-8 mb-8 text-lg">Escolha uma Fruta 🍓 😀</h1>

                        <div className="flex gap-4 justify-center mb-2">
                            {posts.length === 0 ?
                                (<p>Carregando..</p>) :
                                (posts.fruta.map((post, index) => (

                                    <label key={index} className="btn1 cursor-pointer w-[6rem] hover:bg-pink-500 rounded-xl text-sky-500 hover:text-white flex flex-col align-center">
                                        <input name="fruta" type="radio" value={post.fruta} hidden /><p className="h-[3rem] flex flex-col justify-center">{post.fruta}</p>
                                    </label>
                                )))}
                        </div>


                        <h1 className="uppercase tracking-widest text-slate-500 border-b-2 border-pink-500 pt-8 mb-8 text-lg">Adicione Recheio 🍫 😀</h1>
                        <div className="flex gap-4 justify-center mb-2">
                            {posts.length === 0 ?
                                (<p>Carregando..</p>) :
                                (posts.complemento.map((post, index) => (
                                    <label key={index} className="btn1 cursor-pointer w-[6rem] hover:bg-pink-500 rounded-xl text-sky-500 hover:text-white flex flex-col align-center">
                                        <input name="complemento" type="radio" value={post.complemento} hidden /><p className="h-[3rem] flex flex-col justify-center">{post.complemento}</p>
                                    </label>
                                )))}
                        </div>

                        <h1 className="uppercase tracking-widest text-slate-500 border-b-2 border-pink-500 pt-8 mb-8 text-lg">Secione o Tamanho 🥛 😀</h1>
                        <div className="flex gap-4 justify-center mb-2">
                            {posts.length === 0 ?
                                (<p>Carregando..</p>) :
                                (posts.tamanho.map((post, index) => (
                                    <label key={index} className="btn1 cursor-pointer w-[6rem] hover:bg-pink-500 rounded-xl text-sky-500 hover:text-white flex flex-col align-center">
                                        <input name="tamanho" type="radio" value={post.tamanho} hidden /><p className="h-[3rem] flex flex-col justify-center"><span>{post.tamanho}</span><p>R${post.price}</p></p>
                                    </label>
                                )))}
                        </div>

                        <div className="flex m-2 p-2 gap-4 justify-center">
                            <button className="bg-sky-500 w-[8rem] h-[2.5rem] rounded-xl hover:text-sky-500 hover:bg-white text-slate-500 text-white">Realizar Pedido</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Pedidos;