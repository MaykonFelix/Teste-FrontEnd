
import { useState } from "react";
import { Link } from "react-router-dom";


interface IFruits {
    id: number,
    name: string,
};
interface Icomplement {
    id: number,
    name: string,
};
interface IFruits {
    id: number,
    name: string,
};


interface IShoppingCartItem {
    produto: IFruits
    quantidade: number
};

const fruits: IFruits[] = [
    { id: 1, name: "Morango" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Kiwi" }
];

const complement: IFruits[] = [
    { id: 1, name: "Granola" },
    { id: 2, name: "Paçoca" },
    { id: 3, name: "Leite Ninho" }
];

const sizeCup: IFruits[] = [
    { id: 1, name: "Morango", price: 10 },
    { id: 2, name: "Banana", price: 12 },
    { id: 3, name: "Kiwi", price: 12 }
];


export default function Preparando() {

    const [shoppingCart, setShoppingCart] = useState<IShoppingCartItem[]>([]);

    const handleAddToCart = (id: number) => {
        const fruit = fruits.find(fruit => fruit.id === id);

        // --- Abaixo Confere se é repetido o Item
        const alreadyInShoppingCart = shoppingCart.find(item => item.produto.id === id);

        if (alreadyInShoppingCart) {
            const newShoppingCart: IShoppingCartItem[] = shoppingCart.map(item => {
                if (item.produto.id === id) ({
                    ...item,
                    quantidade: item.quantidade++,
                });
                return item;
            });
            setShoppingCart(newShoppingCart);
            return;
        };

        // if fruit is not already in the shopping cart --- Abaixo Adicionar o Item
        const cartItem: IShoppingCartItem = {
            produto: fruit!,
            quantidade: 1,
        };
        const newShoppingCart: IShoppingCartItem[] = [...shoppingCart, cartItem];
        setShoppingCart(newShoppingCart);
    };

    const handleRemoveToCart = (id: number) => {
        const alreadyInShoppingCart = shoppingCart.find(item => item.produto.id === id);

        if (alreadyInShoppingCart!.quantidade > 1) {
            const newShoppingCart: IShoppingCartItem[] = shoppingCart.map(item => {
                if (item.produto.id === id) ({
                    ...item,
                    quantidade: item.quantidade--,
                });
                return item;
            });
            setShoppingCart(newShoppingCart);
            return;
        };

        // if there is only one item with the id in the cart
        const newShoppingCart: IShoppingCartItem[] = shoppingCart.filter(item => item.produto.id !== id);
        setShoppingCart(newShoppingCart);

    };


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
                            <div key={crypto.randomUUID()}>
                                <li className="flex p-2 gap-4">
                                    <button onClick={() => handleAddToCart(fruit.id)}>{fruit.name}</button>
                                </li>
                            </div>
                        ))}
                    </ul>

                    <h1 className="pt-8 text-pink-700">Carrinho</h1>

                    <ul>
                        {shoppingCart.map((item) => (
                            <div key={crypto.randomUUID()}>
                                <li className="flex p-2 gap-4">
                                    <p>Fruta:{item.produto.name}</p>
                                    <p>Quantos: {item.quantidade}x</p>
                                    <p>Valor: R${item.produto.price},00</p>
                                    <p>Total: R${item.quantidade * item.produto.price},00</p>

                                    <button onClick={() => handleRemoveToCart(item.produto.id)}>Remove</button>
                                </li>
                            </div>
                        ))}
                    </ul>
                    <ul>
                        {shoppingCart.map((item) => (
                            <div key={crypto.randomUUID()}>
                                <li className="flex p-2 gap-4">
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
