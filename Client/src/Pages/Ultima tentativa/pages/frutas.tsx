
import { useEffect, useState } from "react";
import axios from "axios";

export default function Frutas() {

    //Importação API ----------------------
    const [posts, setPosts] = useState([])
    const getPosts = async () => {
        try {
            const response = await axios.get('http://localhost:8882/api/pedido');
            var data = response.data;
            setPosts(data);
        } catch (error) {
            console.log(error)
        };
    };
    useEffect(() => {
        getPosts()
    }, [])
    //Importação API ----------------------
    

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

                    <h1 className="pt-8 text-pink-700">Ordem de Pedidos</h1>
                    <div className="flex gap-5">
                        <ul>
                            <p>{choiceFruit}</p>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
