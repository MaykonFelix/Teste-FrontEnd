import axios from "axios";
import { useEffect, useState } from "react";


export const axiosapi = () => {

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


}