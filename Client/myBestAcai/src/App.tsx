import axios from "axios"
import { useEffect, useState } from "react";
import "./App.css"


interface setType {
  frutas: string;
  items: string;
  tamanho: string;
}

function App() {

  {
    let docTitle = document.title;
    window.addEventListener('blur', () => {
      document.title = "Vai emborar ñ 😥";
    });
    window.addEventListener("focus", () => {
      document.title = docTitle;
    })
  }

  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8882/api/pedido');
      const data = response.data;
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
          <p >Faça seu Pedido</p>

          <p>Escolha o<span> Sabor</span></p>

          <div className="home">
            <h1>Frutas:</h1>

            {posts.length === 0 ?
              (<p>Carregando..</p>) :
              (posts.map((post: setType) => (
                <div className="post" key={post.frutas.length}>
                  <h2 className="px-1">{post.frutas}</h2>
                  <h2>{post.items}</h2>
                  <p>{post.tamanho}</p>
                </div>
              ))
              )}
          </div>


        </div>
      </div>

    </>
  )
}

export default App
