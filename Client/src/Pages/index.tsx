
import { useEffect, useState } from "react";

import Frutas from "./pages/frutas"
import Tamanho from "./pages/tamanho"
import Complemento from "./pages/complemento"
import Paginafinal from "./pages/pagefinal"

import axios from "axios";


export default function Principal() {

    const [url, setUrl] = useState('https://mock-test-virid.vercel.app/fruits');

    /* 
    https://mock-test-virid.vercel.app/fruits
    https://mock-test-virid.vercel.app/complements
    https://mock-test-virid.vercel.app/sizecup
    */

    //Importação API ----------------------
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            const res = await axios.get(url);
            var { data } = res;
            setPosts(data);
        } catch (error) {
            console.log(error)
        };
    };

    useEffect(() => {
        getPosts()
    }, [])
    //Importação API ----------------------

    // Navegação ----------------------
    const [fruitsPage, setFruitsPage] = useState(true);
    const [sizePage, setSizePage] = useState(false);
    const [complementoPage, setcomplementoPage] = useState(false);
    const [pageFinalPage, setPageFinalPage] = useState(false);
    // Navegação ----------------------

    return (
        <>

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
