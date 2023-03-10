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

                <div className="shadow-lg shadow-sky-500/30 hover:bg-sky-200/20 duration-500 text-white w-[35rem] h-screen rounded-lg m-2 justify-center items-center flex flex-col">

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

                        <h1 className="uppercase tracking-widest text-slate-500">Escolha a Fruta:</h1>
                        <div className="flex justify-center mb-2">
                            {posts.length === 0 ?
                                (<p>Carregando..</p>) :
                                (posts.fruta.map((post, index) => (
                                    <div key={index}>
                                        <p className="bg-pink-500 m-2 w-[6rem] h-[3rem]  hover:bg-pink-600 cursor-pointer flex items-center justify-center rounded-xl" >{post.fruta}</p>
                                    </div>
                                )))}
                        </div>

                        <h1 className="uppercase tracking-widest text-slate-500">Recheio:</h1>
                        <div className="flex justify-center mb-2">
                            {posts.length === 0 ?
                                (<p>Carregando..</p>) :
                                (posts.complemento.map((post, index) => (
                                    <div key={index}>
                                        <p className="bg-pink-500 m-2 w-[6rem] h-[3rem]  hover:bg-pink-600 cursor-pointer flex items-center justify-center rounded-xl" >{post.complemento}</p>
                                    </div>

                                )))}
                        </div>

                        <h1 className="uppercase tracking-widest text-slate-500">Tamanho:</h1>
                        <div className="flex justify-center mb-2 ">
                            {posts.length === 0 ?
                                (<p>Carregando..</p>) :
                                (posts.tamanho.map((post, index) => (
                                    <div className="bg-pink-500 m-2 w-[6rem] h-[3rem]  hover:bg-pink-600 cursor-pointer flex flex-col items-center justify-center rounded-xl" key={index}>
                                        <p className="" >{post.tamanho}</p>
                                        <span className=" after:content-[',00'] before:content-['R$']"> {post.price}</span>
                                    </div>
                                )))}

                        </div>

                        <form>
                            <h1 className="uppercase tracking-widest text-slate-500 mb-4">Escolha uma Fruta 🍓</h1>
                            <div className="flex gap-4 justify-around ">



                                <label className="btn1 cursor-pointer w-[6rem] hover:bg-pink-500 rounded-xl text-sky-500 hover:text-white flex flex-col align-center">
                                    <input name="fruta" type="radio" value="morango" hidden /><p className="h-[3rem] flex flex-col justify-center">Morango</p>
                                </label>

                                <label className="btn1 cursor-pointer w-[6rem] hover:bg-pink-500 rounded-xl text-sky-500 hover:text-white flex flex-col align-center">
                                    <input name="fruta" type="radio" value="banana" hidden /><p className="h-[3rem] flex flex-col justify-center">Banana</p>
                                </label>

                                <label className="btn1 cursor-pointer w-[6rem] hover:bg-pink-500 rounded-xl text-sky-500 hover:text-white flex flex-col align-center">
                                    <input name="fruta" type="radio" value="kiwi" hidden /><p className="h-[3rem] flex flex-col justify-center">Kiwi</p>
                                </label>

                            </div>

                            <h1 className="uppercase tracking-widest text-slate-500 mb-4">Adicione Recheio 🍫</h1>
                            <div className="flex gap-4 justify-around ">


                                <label className="btn1 cursor-pointer w-[6rem] hover:bg-pink-500 rounded-xl text-sky-500 hover:text-white flex flex-col align-center">
                                    <input name="recheio" type="radio" value="granola" hidden /><p className="h-[3rem] flex flex-col justify-center">Granola</p>
                                </label>

                                <label className="btn1 cursor-pointer w-[6rem] hover:bg-pink-500 rounded-xl text-sky-500 hover:text-white flex flex-col align-center">
                                    <input name="recheio" type="radio" value="pacoca" hidden /><p className="h-[3rem] flex flex-col justify-center">Paçoca</p>
                                </label>

                                <label className="btn1 cursor-pointer w-[6rem] hover:bg-pink-500 rounded-xl text-sky-500 hover:text-white flex flex-col align-center">
                                    <input name="recheio" type="radio" value="leiteNinho" hidden /><p className="h-[3rem] flex flex-col justify-center">Leite Ninho</p>
                                </label>

                            </div>

                            <h1 className="uppercase tracking-widest text-slate-500 mb-4">Escolha o Tamanho 🍓</h1>
                            <div className="flex gap-4 justify-around ">



                                <label className="btn1 cursor-pointer w-[6rem] hover:bg-pink-500 rounded-xl text-sky-500 hover:text-white flex flex-col align-center">
                                    <input name="tamanho" type="radio" value="prequeno" hidden /><p className="h-[3rem] flex flex-col justify-center">Pequeno</p>
                                </label>

                                <label className="btn1 cursor-pointer w-[6rem] hover:bg-pink-500 rounded-xl text-sky-500 hover:text-white flex flex-col align-center">
                                    <input name="tamanho" type="radio" value="medio" hidden /><p className="h-[3rem] flex flex-col justify-center">Médio</p>
                                </label>

                                <label className="btn1 cursor-pointer w-[6rem] hover:bg-pink-500 rounded-xl text-sky-500 hover:text-white flex flex-col align-center">
                                    <input name="tamanho" type="radio" value="grande" hidden /><p className="h-[3rem] flex flex-col justify-center"><span>Grande</span> R$ 15,00</p>

                                </label>

                            </div>
                        </form>

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