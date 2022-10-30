import {Link} from 'react-router-dom';
import './home.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Home(){
    return(
        <div>
            <header>
                <Header/>
            </header>
            <main className='home__content'>
                <h2 className='home__title'>Bem vindo ao BuscadorCEP!</h2>
                <h3 className='home__subtitle'>O aplicativo BuscadorCEP! permite que você encontre códigos de endereçamento postais (CEP).</h3>
                <p className='home__description'>Se você já tiver o CEP em mãos e gostaria de buscar seu endereço, o BuscadorCEP! também vai te ajudar.</p>
                <strong className='home__strong'>Aproveite! =D</strong>

                <div className='home__area-btns'>
                    <Link 
                        className='home__btn'
                        to='/BuscarEndereco'
                    >
                        Buscar Endereço
                    </Link>

                    <Link
                        className='home__btn' 
                        to='/BuscarCEP'
                    >
                        Buscar CEP
                    </Link>
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}