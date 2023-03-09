import { useEffect, useState } from "react";
import "./App.css"
import api from "./components/axios";
import docTitle from "./components/Title";

function App() {

  docTitle(); //Titulo Animado



  const [posts, setPosts] = useState([])

  console.log(posts.length === 0 ? console.log("Zero") : console.log(posts.fruta[2].fruta))

  const getPosts = async () => {
    try {
      const response = await api.get('/api/pedido');
      var data = response.data;
      console.log(data.fruta[0].fruta)

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


          <div className="home">

            <h1>Frutas:</h1>




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
