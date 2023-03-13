
import { useState } from "react";

export default function Tamanho({ posts }) {

    

    const [choiceSize, setchoiceSize] = useState([]);

    return (
        <>
            <div className="bg-slate-100 w-screen h-screen flex flex-col justify-center items-center">
                <div className="shadow-lg shadow-pink-500/30 hover:bg-pink-200/20 duration-500 text-slate-500 w-[35rem] h-screen rounded-lg m-2 justify-center items-center flex flex-col">

                    {/* Escolha a Fruta */}
                    <h1 className="pb-8 text-pink-700">Tamanho</h1>
                    <div className="flex">
                        <div className="flex flex-col">

                            <h2>Tamanho:</h2>

                            {posts.length === 0 ?
                                (<p>Carregando..</p>) :
                                (posts.sizeCup.map((post) => (
                                    <button
                                        className="flex p-2 gap-4"
                                        key={crypto.randomUUID()}
                                        onClick={() => setchoiceSize([post.name, post.price])}
                                    >
                                        <p> {post.name}</p>
                                        <p>R$ {post.price},00</p>
                                    </button>)
                                ))}
                        </div>
                    </div>

                    <h1 className="pt-8 text-pink-700">Ordem de Pedidos</h1>
                    <div className="flex gap-5">
                        <ul className="flex ">
                            <p>{choiceSize[0]}</p>
                            <p>R$ {choiceSize[1]},00</p>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}