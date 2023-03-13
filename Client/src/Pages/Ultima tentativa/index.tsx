
import { useState } from "react";


import Frutas from "./pages/frutas"
import Tamanho from "./pages/tamanho"
import Complemento from "./pages/complemento"





export default function Principal() {

    const [fruitsPage, setFruitsPage] = useState(true);
    const [sizePage, setSizePage] = useState(false);
    const [complementoPage, setcomplementoPage] = useState(false);




    return (
        <>
            {fruitsPage && (
                <Frutas
                    setFruitsPage={setFruitsPage}
                    setSizePage={setSizePage}
                    setcomplementoPage={setcomplementoPage}

                />
            )}
            {sizePage && <Tamanho
                setSizePage={setSizePage}
                setcomplementoPage={setcomplementoPage}
            />}
            {complementoPage && <Complemento />}

        </>
    )
}
