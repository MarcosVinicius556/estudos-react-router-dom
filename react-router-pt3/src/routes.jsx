import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from '../src/Components/Header';
import Erro from '../src/pages/Erro';
import Produto from './pages/Produto';

function RoutesApp(){
    return(
        <BrowserRouter> 
        
        <Header />
            <Routes>  {/* Armazena as rotas */}
                <Route path="/" element={ <Home /> } /> {/* Definindo o caminho e o elemento a ser renderizado */}
                <Route path="/about" element={ <About/>  } />
                <Route path="/contact" element={ <Contact /> } />
                <Route path="/product/:id" element={ <Produto /> } /> {/** ":nomeDoAtributo" marca um atributo dinâmico */}

                <Route path="*" element={ <Erro /> } /> {/** "*" faz com que o react entenda que é uma página de notFound */}
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;