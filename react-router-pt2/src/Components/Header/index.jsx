import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h2>cabeçalho</h2>
            <div className='menu'>
                <Link to="/" > Home </Link>
                <Link to="/about" > Sobre </Link>
                <Link to="/contact" > Contato </Link>
            </div>
        </header>
    )
  }
  
  export default Header;
  