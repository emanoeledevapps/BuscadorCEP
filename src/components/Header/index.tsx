import { Link } from 'react-router-dom';
import './header.css';

export function Header(){
    return(
        <div className='header__container'>
            <h1 className='header__title'>BuscadorCEP!</h1>
            <nav>
                <Link 
                    to='/BuscarEndereco'
                    className='nav__link'
                >
                    Buscar Endereço
                </Link>
                <Link 
                    to='/BuscarCEP'
                    className='nav__link'
                >
                    Buscar CEP
                </Link>
            </nav>
        </div>
    )
}