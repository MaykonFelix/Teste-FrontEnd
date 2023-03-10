import { useEffect, useState } from "react";
import "./App.css"
import api from "./components/axios";
import docTitle from "./components/Title";


import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const steps = [
  'Pedido',
  'Preparando',
  'Finalizado',
];


function App() {

  docTitle(); //Titulo Animado

  const [posts, setPosts] = useState([])
  console.log(posts.length === 0 ? console.log("Zero") : console.log(posts.fruta[2].fruta)) //Chamando Kiwi

  const getPosts = async () => {
    try {
      const response = await api.get('/api/pedido');
      var data = response.data;

      console.log(data.fruta[0].fruta) //Chamando Morango

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
      <div className="bg-slate-100 w-screen mt-2 flex flex-col justify-center items-center">
        <Box sx={{ width: '50%' }}>
          <Stepper activeStep={0} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>

      <div className="bg-slate-100 w-screen h-screen flex flex-col justify-center items-center">



        <div className="bg-pink-900 shadow-lg shadow-indigo-500/70 text-white/75 w-[35rem] h-[40rem] rounded-lg justify-center items-center flex flex-col">



          <div className="home flex text-center flex-col gap-2">

            <h1 className="uppercase tracking-widest">Escolha a Fruta:</h1>
            <div className="flex justify-center mb-2">
              {posts.length === 0 ?
                (<p>Carregando..</p>) :
                (posts.fruta.map((post, index) => (
                  <div key={index}>
                    <p className="bg-pink-500 m-2 w-[6rem] h-[3rem]  hover:bg-pink-600 cursor-pointer flex items-center justify-center rounded-xl" >{post.fruta}</p>
                  </div>
                )))}
            </div>

            <h1 className="uppercase tracking-widest ">Recheio:</h1>
            <div className="flex justify-center mb-2">
              {posts.length === 0 ?
                (<p>Carregando..</p>) :
                (posts.complemento.map((post, index) => (
                  <div key={index}>
                    <p className="bg-pink-500 m-2 w-[6rem] h-[3rem]  hover:bg-pink-600 cursor-pointer flex items-center justify-center rounded-xl" >{post.complemento}</p>
                  </div>

                )))}
            </div>

            <h1 className="uppercase tracking-widest ">Tamanho:</h1>
            <div className="flex justify-center mb-2">
              {posts.length === 0 ?
                (<p>Carregando..</p>) :
                (posts.tamanho.map((post, index) => (
                  <div key={index}>
                    <p className="bg-pink-500 m-2 w-[6rem] h-[3rem]  hover:bg-pink-600 cursor-pointer flex items-center justify-center rounded-xl" >{post.tamanho}</p>
                    <p className="bg-pink-500 m-2 w-[6rem] h-[3rem]  hover:bg-pink-600 cursor-pointer flex items-center justify-center rounded-xl after:content-[',00'] after:ml-0.5 before:content-['R$']" >{post.price}</p>
                  </div>
                )))}



            </div>


            <div className="flex m-2 p-2 gap-4 justify-center">
              <button className="hover:text-pink-400">Finalizar Pedido</button>
            </div>

          </div>
          <div>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
              <AddShoppingCartIcon />
            </IconButton>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
