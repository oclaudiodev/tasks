import { BrowserRouter, Routes, Route } from "react-router"
import Task from "./pages/inicio"

export default function Navegacao(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Task/>}/>
            </Routes>
        </BrowserRouter>
    )
}