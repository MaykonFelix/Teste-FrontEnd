
import { useEffect, useState } from "react";

import Frutas from "./pages/frutas"
import Tamanho from "./pages/tamanho"
import Complemento from "./pages/complemento"
import Paginafinal from "./pages/pagefinal"

import axios from "axios";


export default function Principal() {

    /* 
    https://mock-test-virid.vercel.app/fruits
    https://mock-test-virid.vercel.app/complements
    https://mock-test-virid.vercel.app/sizecup
    */

    //Importação API ----------------------
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            const response = await axios.get('https://mock-test-virid.vercel.app/fruits');
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


    const [fruitsPage, setFruitsPage] = useState(true);
    const [sizePage, setSizePage] = useState(false);
    const [complementoPage, setcomplementoPage] = useState(false);
    const [pageFinalPage, setPageFinalPage] = useState(false);

    return (
        <>
            {/* 
            <h1>Teste</h1>

            {posts.length === 0 ?
                (<p>Carregando..</p>) :
                (posts.map((post) => (
                    <>
                        <button
                            className="flex p-2 gap-4"
                            key={crypto.randomUUID()}
                        >
                            {post.name}
                        </button>
                        <img
                            key={crypto.randomUUID()}
                            src={post.image}
                            alt=""
                            className="w-20"
                        />


                    </>
                )
                ))} */}


            {fruitsPage && (
                <Frutas
                    posts={posts}
                    setFruitsPage={setFruitsPage}
                    setSizePage={setSizePage}
                    setcomplementoPage={setcomplementoPage}

                />
            )}

            {sizePage && <Tamanho
                posts={posts}
                setSizePage={setSizePage}
                setcomplementoPage={setcomplementoPage}
            />}

            {complementoPage && <Complemento
                posts={posts}
            />}

            {pageFinalPage && <Paginafinal
                posts={posts}
            />}



        </>
    )
}
