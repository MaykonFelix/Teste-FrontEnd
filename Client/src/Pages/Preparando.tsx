
import { Link } from "react-router-dom";


export default function Preparando() {
    return (
        <>

            <div className="flex gap-4 w-screen justify-center text-center bg-slate-500 text-white">
                <Link to="/"> <p>Home</p> </Link>
                <Link to="/preparando"> <p>Preparando</p> </Link>
            </div>

            <div className="bg-slate-100 w-screen h-screen flex flex-col justify-center items-center">

                <div className="shadow-lg shadow-pink-500/30 hover:bg-pink-200/20 duration-500 text-slate-500 w-[35rem] h-screen rounded-lg m-2 justify-center items-center flex flex-col">


                    <h1>Preparando</h1>

                </div>
            </div>
        </>
    )
}
