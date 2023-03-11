import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Pedidos from "./Pages/Pedidos";
import Preparando from './Pages/Preparando';

export const Rotas = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Pedidos />} />
                    <Route path="/preparando" element={<Preparando />} />
                </Routes>
            </Router>
        </>
    )
}
