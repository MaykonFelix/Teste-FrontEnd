
import { useState } from "react";
import { Link } from "react-router-dom";


interface IFruits {
    id: number,
    nome: string,
    price: number
};

interface IShoppingCartItem {
    produto: IFruits
    quantidade: number
};

const fruits: IFruits[] = [
    { id: 1, nome: "Morango", price: 10 },
    { id: 2, nome: "Banana", price: 12 },
    { id: 3, nome: "Kiwi", price: 12 }
];


export default function Preparando() {

    const [shoppingCart, setShoppingCart] = useState<IShoppingCartItem[]>([]);
    console.log(setShoppingCart)

    const handleAddToCart = (id: number) => {
        const fruit = fruits.find(fruit => fruit.id === id)
        const cartItem: IShoppingCartItem = {
            produto: fruit!,
            quantidade: 1,
        }
        const newShoppingCart: IShoppingCartItem[] = [...shoppingCart, cartItem]
        setShoppingCart(newShoppingCart)
    };

    const handleRemoveToCart = (id: number) => { };


    return (
        <>

            <div className="flex gap-4 w-screen justify-center text-center bg-slate-500 text-white">
                <Link to="/"> <p>Home</p> </Link>
                <Link to="/preparando"> <p>Preparando</p> </Link>
            </div>

            <div className="bg-slate-100 w-screen h-screen flex flex-col justify-center items-center">

                <div className="shadow-lg shadow-pink-500/30 hover:bg-pink-200/20 duration-500 text-slate-500 w-[35rem] h-screen rounded-lg m-2 justify-center items-center flex flex-col">

                    <h1 className="pb-8 text-pink-700">Preparando</h1>
                    <h2>Frutas:</h2>

                    <ul>
                        {fruits.map((fruit) => (
                            <div key={fruit.id}>
                                <li className="flex p-2 gap-4">
                                    <p>{fruit.nome}</p>
                                    <p>R$ {fruit.price},00</p>
                                    <button onClick={() => handleAddToCart(fruit.id)}>+</button>

                                </li>
                            </div>
                        ))}
                    </ul>

                    <h1 className="pt-8 text-pink-700">Carrinho</h1>

                    <ul>
                        {shoppingCart.map((item) => (
                            <div key={item.produto.id}>
                                <li className="flex p-2 gap-4">
                                    <p>Fruta: {item.produto.nome}</p>
                                    <p>Quantos: {item.quantidade}x</p>
                                    <p>Valor: R${item.produto.price},00</p>
                                    <p>Total: R${item.quantidade * item.produto.price},00</p>

                                    <button onClick={() => handleRemoveToCart(item.produto.id)}>Remove</button>
                                </li>
                            </div>
                        ))}
                    </ul>


                </div>
            </div>
        </>
    )
}
