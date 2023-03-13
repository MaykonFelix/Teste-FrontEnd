import axios from 'axios';
import { useEffect, useState } from 'react'



const axioTeste = () => {
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
    return posts
}

export default axioTeste