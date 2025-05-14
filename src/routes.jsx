import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'
import Contatos from './pages/Contatos'
import Page404 from './pages/Page404'
import PageBase from "./pages/PageBase"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageBase />}>
                    <Route index element={<Home />} />
                    <Route path="sobre" element={<Sobre />} />
                    <Route path="projetos" element={<Projetos />} />
                    <Route path="contatos" element={<Contatos />} />
                    <Route path="Page404"element={<Page404 />} />

                    {/* Ao invés de mostrar a página 404, redireciona para Home */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
