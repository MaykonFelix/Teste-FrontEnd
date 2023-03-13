
import { useEffect, useState } from "react";

import axios from "axios";

export default function Principal() {

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


    const [choiceFruit, setChoiceFruit] = useState([]);
    console.log(choiceFruit)


    return (
        <>
            <div className="bg-slate-100 w-screen h-screen flex flex-col justify-center items-center">
                <div className="shadow-lg shadow-pink-500/30 hover:bg-pink-200/20 duration-500 text-slate-500 w-[35rem] h-screen rounded-lg m-2 justify-center items-center flex flex-col">

                    {/* Escolhas do Pedido */}

                    <h1 className="pb-8 text-pink-700">Escolher</h1>
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


                        {/*       <div className="flex gap-4 justify-center mb-2">
                            {posts.length === 0 ?
                                (<p>Carregando..</p>) :
                                (posts.fruta.map((post, index) => (

                                    <label key={index} className="btn1 cursor-pointer w-[6rem] hover:bg-pink-500 rounded-xl text-sky-500 hover:text-white flex flex-col align-center">
                                        <input name="fruta" type="radio" value={post.fruta} hidden /><p className="h-[3rem] flex flex-col justify-center">{post.fruta}</p>
                                    </label>
                                )))}
                        </div> */}


                        {/* 
                        <div className="flex flex-col">
                            <h2>Recheio:</h2>
                            {complements.map((complement) => (
                                <button
                                    className="flex p-2 gap-4"
                                    key={crypto.randomUUID()}
                                    onClick={() => handleAddComplement(complement.id)}>
                                    {complement.name}
                                </button>
                            ))}
                        </div>

                        <div className="flex flex-col">
                            <h2>Tamanho:</h2>
                            {sizeCups.map((sizeCup) => (
                                <button
                                    className="flex p-2 gap-4"
                                    key={crypto.randomUUID()}
                                    onClick={() => handleAddSizeCup(sizeCup.id)}>
                                    {sizeCup.name} R${sizeCup.price}
                                </button>
                            ))}

                        </div> */}


                    </div>

                    {/* Sendo Realizado o Pedido */}
                    {/*                     <h1 className="pt-8 text-pink-700">Pedido</h1>
                    <div className="flex gap-5 justify-center">

                        {shoppingCartFruit.map((item) => (
                            <p
                                key={crypto.randomUUID()}
                                className="flex flex-col justify-center">
                                {item.produto.name}
                            </p>
                        ))}

                        {shoppingCartComplement.map((item) => (
                            <p
                                key={crypto.randomUUID()}
                                className="flex flex-col justify-center">
                                {item.produto.name}
                            </p>
                        ))}


                        {shoppingCartSizeCup.map((item) => (
                            <p
                                key={crypto.randomUUID()}
                                className="flex flex-col justify-center">
                                {item.produto.name} R$ {item.produto.price}
                                {console.log(item)}
                            </p>
                        ))}

                        <Tooltip title="Adicionar Carrinho" placement="right" arrow>
                            <Stack direction="row" spacing={1}>
                                <IconButton color="secondary" aria-label="add to shopping cart">
                                    <AddShoppingCartIcon onClick={() => handleAddCart()} />
                                </IconButton>
                            </Stack>
                        </Tooltip>


                    </div>
 */}

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
