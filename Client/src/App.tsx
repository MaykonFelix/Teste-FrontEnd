import { useEffect, useState } from "react";
import "./App.css"
import api from "./components/axios";
import docTitle from "./components/Title";

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
      <div className="bg-slate-100 w-screen h-screen flex flex-col justify-center items-center">
        <div className="bg-pink-900 shadow-lg shadow-indigo-500/70 text-white/75 w-[35rem] h-[40rem] rounded-lg justify-center items-center flex flex-col">


          <div className="home flex flex-col">

            <h1 className="uppercase ">Frutas:</h1>

            <div className="flex p-2">
              {posts.length === 0 ?
                (<p>Carregando..</p>) :
                (posts.fruta.map((post, index) => (
                  <div key={index}>
                    <p className="bg-pink-500 m-2 w-[6rem] h-[3rem]  hover:bg-pink-600 cursor-pointer flex items-center justify-center rounded-xl" >{post.fruta}</p>
                  </div>
                )))}
            </div>

            <h1 className="uppercase ">Adicionais:</h1>

            <div className="flex p-2">
              {posts.length === 0 ?
                (<p>Carregando..</p>) :
                (posts.complemento.map((post, index) => (

                  <div key={index}>

                    <p className="bg-pink-500 m-2 w-[6rem] h-[3rem]  hover:bg-pink-600 cursor-pointer flex items-center justify-center rounded-xl" >{post.complemento}</p>

                  </div>

                )))}
            </div>

            <h1>Tamanho:</h1>

            <div className="flex p-2">
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
              <button>Adicionar</button>
              <button>Remover</button>
            </div>

            {/* {posts.length === 0 ?
              (<p>Carregando..</p>) :
              (posts.map((post) => (
                <div className="post" key={post.length}>

                  <h1 className="">{post}</h1>

                  <h2>{post}</h2>

                  <p>{post}</p>

                </div>

              ))
              )} */}


          </div>


        </div>
      </div>

    </>
  )
}

export default App
