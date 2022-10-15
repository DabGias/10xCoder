import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import FormCand from "./components/FormCand"
import Candidatos from "./components/Candidatos"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/candidato" element={<FormCand/>}/>
                <Route path="/candidato/:id" element={<FormCand/>}/>
                <Route path="/lista-candidatos" element={<Candidatos/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App