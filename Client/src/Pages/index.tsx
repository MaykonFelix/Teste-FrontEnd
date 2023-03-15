
import { useEffect, useState } from "react";

import Frutas from "./pages/frutas"
import Tamanho from "./pages/tamanho"
import Complemento from "./pages/complemento"
import Paginafinal from "./pages/pagefinal"

import axios from "axios";


export default function Principal() {

    // Pegando API ----------------------
    const [urlFruit, setUrlFrui] = useState('https://mock-test-virid.vercel.app/fruits');
    const [urlSizeCup, setUrlSizeCup] = useState('https://mock-test-virid.vercel.app/sizecup');
    const [urlComplement, setUrlComplement] = useState('https://mock-test-virid.vercel.app/complements');
    // Pegando API ----------------------

    // Manipulando API ----------------------
    const [postsFruit, setPostsFruit] = useState([])
    const [postsSizeCup, setPostsSizeCup] = useState([])
    const [postsComplement, setPostsComplement] = useState([])
    // Manipulando API ----------------------

    // Navegação ----------------------
    const [fruitsPage, setFruitsPage] = useState(false);
    const [sizePage, setSizePage] = useState(false);
    const [complementoPage, setcomplementoPage] = useState(true);
    const [pageFinalPage, setPageFinalPage] = useState(false);
    // Navegação ----------------------

    //Função para carregar API ----------------------
    const getPosts = async () => {
        try {
            const resFruit = await axios.get(urlFruit);
            var { data } = resFruit;
            setPostsFruit(data);

            const resSizeCup = await axios.get(urlSizeCup);
            var { data } = resSizeCup;
            setPostsSizeCup(data);

            const resComplement = await axios.get(urlComplement);
            var { data } = resComplement;
            setPostsComplement(data);

        } catch (error) {
            console.log(error)
        };
    };
    useEffect(() => {
        getPosts()
    }, [])
    //Função da API ----------------------


    return (
        <>

            {fruitsPage && (
                <Frutas
                    postsFruit={postsFruit}
                    setFruitsPage={setFruitsPage}
                    setSizePage={setSizePage}
                    setcomplementoPage={setcomplementoPage}

                />
            )}

            {sizePage && <Tamanho
                postsSizeCup={postsSizeCup}
                setSizePage={setSizePage}
                setcomplementoPage={setcomplementoPage}
            />}

            {complementoPage && <Complemento
                postsComplement={postsComplement}
            />}



        </>
    )
}
