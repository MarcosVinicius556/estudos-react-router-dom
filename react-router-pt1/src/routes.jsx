import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>  {/* Armazena as rotas */}
                <Route path="/" element={ <Home /> } /> {/* Definindo o caminho e o elemento a ser renderizado */}
                <Route path="/about" element={ <About/>  } />
                <Route path="/contact" element={ <Contact /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;