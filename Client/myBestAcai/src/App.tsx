import axios from "axios"
import { useEffect, useState } from "react";
import "./app.css"




function App() {

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

  console.log(posts);


  return (
    <>
      <div className="bg-slate-100 w-screen h-screen flex flex-col justify-center items-center">
        <div className="bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white/75 w-[35rem] h-[40rem] rounded-lg justify-center items-center flex flex-col">
          <p>Faça seu Pedido</p>

          <p>Escolha o<span> Sabor</span></p>


        </div>
      </div>

    </>
  )
}

export default App
