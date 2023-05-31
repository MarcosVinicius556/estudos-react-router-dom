import { useParams } from 'react-router-dom';

function Produto(){

    // Hook para pegar parâmetros da rota
    const { id } = useParams();

    return(
        <div>
            <h2>Detalhes do produto</h2>
            MEU PRODUTO É { id }
        </div>
    );
}

export default Produto;