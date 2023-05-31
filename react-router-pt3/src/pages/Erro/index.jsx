import { Link } from 'react-router-dom';

function Erro(){
    return(
        <div>
            <h2>Ops, esta página não existe</h2><br/><br/>
            <h4>Foram encontradas essas páginas:</h4><br/><br/>
            <Link to="/"> Home </Link>
            <Link to="/about"> Sobre </Link>
            <Link to="/contact"> Contato </Link>
        </div>
    );
}

export default Erro;