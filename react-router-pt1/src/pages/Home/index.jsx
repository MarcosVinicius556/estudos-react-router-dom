import { Link } from 'react-router-dom';

function Home() {


    return (
        <div>
          <h1>Home</h1>

          <Link to="/about">Sobre</Link>
          <br />
          <Link to="/contact">Contato</Link>
        </div>
    )
  }
  
  export default Home
  