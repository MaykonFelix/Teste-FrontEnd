
import Frutas from "./pages/frutas"
import Tamanho from "./pages/tamanho"
import Complemento from "./pages/complemento"
import { useState } from "react";





export default function Principal() {

    const [fruitsPage, setFruitsPage] = useState(true);
    const [sizePage, setSizePage] = useState(false);
    const [complementoPage, setcomplementoPage] = useState(false);




    return (
        <>
            {fruitsPage && (
                <Frutas
                    choiceFruit={choiceFruit}
                    setChoiceFruit={setChoiceFruit}
                    posts={posts}
                    setPosts={setPosts} />
            )}
            {sizePage && <Tamanho />}
            {complementoPage && <Complemento />}

        </>
    )
}
