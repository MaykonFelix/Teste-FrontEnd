
import { useState } from "react";
import { Link } from "react-router-dom";

// Tipagem Inicial
/* interface IshoppingCartFruitItem {
    produto: IFruits
    quantidade: number
}; */

// Tipagem -------------------------
interface IFruits {
    id: number,
    name: string,
};
interface Icomplement {
    id: number,
    name: string,
};
interface IsizeCup {
    id: number,
    name: string,
    price: number,
};

interface IshoppingCartItem {
    produto: IFruits
};

// Dados --------------------------
const fruits: IFruits[] = [
    { id: 1, name: "Morango" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Kiwi" }
];

const complements: Icomplement[] = [
    { id: 1, name: "Granola" },
    { id: 2, name: "Paçoca" },
    { id: 3, name: "Leite Ninho" }
];

const sizeCups: IsizeCup[] = [
    { id: 1, name: "Pequeno", price: 10 },
    { id: 2, name: "Médio", price: 12 },
    { id: 3, name: "Grande", price: 12 }
];
// Final Dados --------------------------

//Inicio Aplicação ----------------------
export default function Preparando() {
    // Função inicial
    /* 
        const [shoppingCartFruit, setshoppingCartFruit] = useState<IshoppingCartFruitItem[]>([]);
    
        const handleAddToCart = (id: number) => {
            // --- Procura pelo id a fruta escolhida
            const fruit = fruits.find(fruit => fruit.id === id);
            // --- Abaixo Confere se é repetido o Item
            const alreadyInshoppingCartFruit = shoppingCartFruit.find(item => item.produto.id === id);
            // --- Se for repetida adiciona mais um na quantidade
            if (alreadyInshoppingCartFruit) {
                const newshoppingCartFruit: IshoppingCartFruitItem[] = shoppingCartFruit.map(item => {
                    if (item.produto.id === id) ({
                        ...item,
                        quantidade: item.quantidade++,
                    });
                    return item;
                });
                setshoppingCartFruit(newshoppingCartFruit);
                return;
            };
            // Adicionar o Item
            const cartItem: IshoppingCartFruitItem = {
                produto: fruit!,
                quantidade: 1,
            };
            const newshoppingCartFruit: IshoppingCartFruitItem[] = [...shoppingCartFruit, cartItem];
            setshoppingCartFruit(newshoppingCartFruit);
        };
    
        const handleRemoveToCart = (id: number) => {
            const alreadyInshoppingCartFruit = shoppingCartFruit.find(item => item.produto.id === id);
    
            if (alreadyInshoppingCartFruit!.quantidade > 1) {
                const newshoppingCartFruit: IshoppingCartFruitItem[] = shoppingCartFruit.map(item => {
                    if (item.produto.id === id) ({
                        ...item,
                        quantidade: item.quantidade--,
                    });
                    return item;
                });
                setshoppingCartFruit(newshoppingCartFruit);
                return;
            };
    
            // if there is only one item with the id in the cart
            const newshoppingCartFruit: IshoppingCartFruitItem[] = shoppingCartFruit.filter(item => item.produto.id !== id);
            setshoppingCartFruit(newshoppingCartFruit);
    
        };
     */

    // useState --------------------------
    const [shoppingCartFruit, setshoppingCartFruit] = useState<IshoppingCartItem[]>([]);
    const [shoppingCartComplement, setShoppingCartComplement] = useState<IshoppingCartItem[]>([]);
    const [shoppingCartSizeCup, setShoppingCartSizeCup] = useState<IshoppingCartItem[]>([]);
    const [orderCart, setOrderCart] = useState<IshoppingCartItem[]>([]);
    // Final useState --------------------------

    // Adicionando itens a Sacola -----------------------
    const handleAddFruit = (id: number) => {
        // --- Procura pelo id a fruta escolhida
        const fruit = fruits.find(fruit => fruit.id === id);

        // Adicionar o Item
        const cartItem: IshoppingCartItem = {
            produto: fruit!,
        };

        const newshoppingCartFruit: IshoppingCartItem[] = [cartItem];
        setshoppingCartFruit(newshoppingCartFruit);
    };

    const handleAddComplement = (id: number) => {
        // --- Procura pelo id a fruta escolhida
        const complement = complements.find(complement => complement.id === id);
        // Adicionar o Item
        const cartItem: IshoppingCartItem = {
            produto: complement!,
        };
        const newshoppingCartComplement: IshoppingCartItem[] = [cartItem];
        setShoppingCartComplement(newshoppingCartComplement);
    };

    const handleAddSizeCup = (id: number) => {
        // --- Procura pelo id a fruta escolhida
        const sizeCup = sizeCups.find(sizeCup => sizeCup.id === id);
        // Adicionar o Item
        const cartItem: IshoppingCartItem = {
            produto: sizeCup!,
        };
        const newshoppingCartSizeCup: IshoppingCartItem[] = [cartItem];
        setShoppingCartSizeCup(newshoppingCartSizeCup);
    };
    // Final Adicionando itens a Sacola-----------------------


    const handleAddCart = () => {
        // --- Procura pelo id a fruta escolhida
        /*        const orderCarts = {
                   fruit: shoppingCartFruit!,
                   complement: shoppingCartComplement!,
                   size: shoppingCartSizeCup!,
               }; */

        const orderCarts = [
            shoppingCartFruit!,
            shoppingCartComplement!,
            shoppingCartSizeCup!,
        ];
        // Adicionar o Item
        const newOrderCart = [...orderCart, orderCarts];
        setOrderCart(newOrderCart);
        console.log(newOrderCart)

        return

        shoppingCartFruit.length = 0;
        shoppingCartComplement.length = 0;
        shoppingCartSizeCup.length = 0;
    };


    /*     
        const handleRemoveToCart = (id: number) => {
            const alreadyInshoppingCartFruit = shoppingCartFruit.find(item => item.produto.id === id);
    
            if (alreadyInshoppingCartFruit!.quantidade > 1) {
                const newshoppingCartFruit: IshoppingCartFruitItem[] = shoppingCartFruit.map(item => {
                    if (item.produto.id === id) ({
                        ...item,
                        quantidade: item.quantidade--,
                    });
                    return item;
                });
                setshoppingCartFruit(newshoppingCartFruit);
                return;
            };
    
            // if there is only one item with the id in the cart
            const newshoppingCartFruit: IshoppingCartFruitItem[] = shoppingCartFruit.filter(item => item.produto.id !== id);
            setshoppingCartFruit(newshoppingCartFruit);
    
        };
     */


    return (
        <>

            <div className="flex gap-4 w-screen justify-center text-center bg-slate-500 text-white">
                <Link to="/"> <p>Home</p> </Link>
                <Link to="/preparando"> <p>Preparando</p> </Link>
            </div>

            <div className="bg-slate-100 w-screen h-screen flex flex-col justify-center items-center">

                <div className="shadow-lg shadow-pink-500/30 hover:bg-pink-200/20 duration-500 text-slate-500 w-[35rem] h-screen rounded-lg m-2 justify-center items-center flex flex-col">


                    {/* Escolhas do Pedido */}


                    <h1 className="pb-8 text-pink-700">Escolher</h1>
                    <div className="flex">
                        <div className="flex flex-col">
                            <h2>Frutas:</h2>
                            {fruits.map((fruit) => (
                                <button
                                    className="flex p-2 gap-4"
                                    key={crypto.randomUUID()}
                                    onClick={() => handleAddFruit(fruit.id)}>
                                    {fruit.name}
                                </button>
                            ))}
                        </div>

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

                        </div>
                    </div>

                    {/* Sendo Realizado o Pedido */}
                    <h1 className="pt-8 text-pink-700">Pedido</h1>
                    <div className="flex gap-5">
                        <ul>
                            {shoppingCartFruit.map((item) => (
                                <p
                                    key={crypto.randomUUID()}>
                                    {item.produto.name}
                                </p>
                            ))}
                        </ul>
                        <ul>
                            {shoppingCartComplement.map((item) => (
                                <p
                                    key={crypto.randomUUID()}>
                                    {item.produto.name}
                                </p>
                            ))}
                        </ul>
                        <ul>
                            {shoppingCartSizeCup.map((item) => (
                                <p
                                    key={crypto.randomUUID()}>
                                    {item.produto.name} R$ {item.produto.price}
                                </p>
                            ))}
                        </ul>

                        <button
                            className="bg-pink-500 hover:bg-pink-600 text-white w-[5rem] rounded-xl "
                            key={crypto.randomUUID()}
                            onClick={() => handleAddCart()}>
                            Finalizar
                        </button>


                    </div>



                    {/* Preparando o Pedido */}




                    {/* ABAIXO É O RESULTADO */}
                    {/* <ul>
                        {shoppingCartFruit.map((item) => (
                            <div key={crypto.randomUUID()}>
                                <li className="flex p-2 gap-4">
                                    <p>Quantos: {item.quantidade}x</p>
                                    <p>Valor: R${item.produto.price},00</p>
                                    <p>Total: R${item.quantidade * item.produto.price},00</p>

                                    <button onClick={() => handleRemoveToCart(item.produto.id)}>Remove</button>
                                </li>
                            </div>
                        ))}
                    </ul> */}


                </div>
            </div>
        </>
    )
}
