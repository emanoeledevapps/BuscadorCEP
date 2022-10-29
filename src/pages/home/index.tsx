import {Link} from 'react-router-dom';
import './home.css';

export function Home(){
    return(
        <div>
            <Link to='/BuscarEndereco'>
                Buscar Endereço
            </Link>

            <Link to='/BuscarCEP'>
                Buscar CEP
            </Link>
        </div>
    )
}