import React,{ useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './searchZipCode.css';

//Material UI
import * as Dialog from '@radix-ui/react-dialog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Services and Interfaces
import { ApiIBGE, ApiViacep } from '../../services/api';
import {StatesProps, CountieProps, AddressProps} from '../../interfaces/address';

//Components
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Loading } from '../../components/Loading';
import { ModalSearchZipcodeResult } from '../../components/ModalSearchZipcodeResult';

//Icons
import {MdLocationCity, MdOutlineArrowBackIos} from 'react-icons/md';
import {HiHome} from 'react-icons/hi';
import {FaSearch, FaMapMarkerAlt} from 'react-icons/fa';

export function SearchZipCode(){
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [states, setStates] = useState<StatesProps[]>([]);
    const [stateSelected, setStateSelected] = useState('');
    const [counties, setCounties] = useState<CountieProps[]>([]);
    const [countieSelected, setCountieSelected] = useState('');
    const [publicPlace, setPublicPlace] = useState('');
    const [address, setAddress] = useState<AddressProps[]>([]);
    const [visibleModal, setVisibleModal] = useState<boolean>(false);

    useEffect(() => {
        GetStates();
    },[]);

    useEffect(() => {
        GetCounties();
    },[stateSelected]);

    async function GetStates(){
        setLoading(true);
        const api = ApiIBGE();
        const response = await api.get('/localidades/estados?orderBy=nome');
        setStates(response.data);
        setLoading(false);
    }

    async function GetCounties(){
        setLoading(true);
        const arrayState = stateSelected.split('-');
        const idState = arrayState[0];
        const api = ApiIBGE();
        const response = await api.get(`/localidades/estados/${idState}/municipios`);
        setCounties(response.data);
        setLoading(false);
    }

    async function handleFindZipCode(e: React.SyntheticEvent){
        e.preventDefault();
        if(publicPlace.length <= 2){
            toast.error('Você deve digitar pelo menos 3 caracteres no campo logradouro!');
            return;
        }
        setLoading(true);
        const arrayState = stateSelected.split('-');
        const arrayCountie = countieSelected.split('-');
        const initialState = arrayState[1];
        const nameCountie = arrayCountie[1];
        
        const api = ApiViacep();
        const response = await api.get(`/${initialState}/${nameCountie}/${publicPlace}/json/`);
        if(response.data.length === 0){
            setLoading(false);
            toast.error('Não foram encontrados nenhum endereço para a sua busca!');
            return;
        }
        setAddress(response.data);
        setLoading(false);
        setVisibleModal(true);
    }

    return(
        <div className='search-zip-code__container'>
            <header>
                <Header/>
            </header>

            <main className='search-zip-code__content'>
                <h2 className='search-zip-code__info'>Preencha as informações para realizar a pesquisa</h2>
                <form 
                    onSubmit={(e: React.SyntheticEvent) => handleFindZipCode(e)}
                    className='search-zip-code__form'
                >
                    <div className='container-input'>
                        <label 
                            htmlFor='input-state'
                            className='label-input'
                        >
                            <FaMapMarkerAlt color='#000' size={20}/>
                            Estado
                        </label>
                        <select
                            id='input-state'
                            value={stateSelected}
                            onChange={(e) => setStateSelected(e.target.value)}
                            className='input'
                            required
                        >
                            <option disabled value=''>Selecione o estado</option>
                            {states?.map(state => {
                                return <option key={state.id} value={`${state.id}-${state.sigla}-${state.nome}`}>{state.nome}</option>
                            })}
                        </select>
                    </div>
                    
                    <div className='container-input'>
                        <label 
                            htmlFor='input-countie'
                            className='label-input'
                        >
                            <MdLocationCity size={20} color='#000'/>
                            Município
                        </label>
                        <select
                            id='input-countie'
                            value={countieSelected}
                            onChange={(e) => setCountieSelected(e.target.value)}
                            className='input'
                            required
                            disabled={stateSelected === ''}
                        >
                            <option disabled value=''>Selecione o município</option>
                            {counties?.map(countie => {
                                return <option key={countie.id} value={`${countie.id}-${countie.nome}`}>{countie.nome}</option>
                            })}
                        </select>
                    </div>
                    
                    <div className='container-input'>
                        <label 
                            htmlFor='input-public-place'
                            className='label-input'
                        >
                            <HiHome size={20} color='#000'/>
                            Logradouro
                        </label>
                        <input
                            id='input-public-place'
                            value={publicPlace} 
                            onChange={(e) => setPublicPlace(e.target.value)}
                            className='input'
                            placeholder='Digite o nome do logradouro'
                            type='text'
                            required
                            disabled={countieSelected === ''}
                        />
                    </div>

                    <div className='form__container-btns'>
                        <button
                            type='button' 
                            onClick={() => navigate(-1)}
                            className='form__btn-goback'
                        >
                            <MdOutlineArrowBackIos size={20} color='#387EFF'/>
                            Voltar
                        </button>
                        <button 
                            type='submit'
                            disabled={stateSelected === '' || countieSelected === '' || publicPlace === ''}
                            className='btn-submit-form'
                        >
                            <FaSearch size={20} color='#fff'/>
                            Pesquisar
                        </button>
                    </div>
                </form>
            </main>
            <footer>
                <Footer/>
            </footer>
            <Dialog.Root open={loading}>
                <Loading/>
            </Dialog.Root>
            <Dialog.Root open={visibleModal} onOpenChange={(open) => setVisibleModal(open)}>
                <ModalSearchZipcodeResult data={address}/>
            </Dialog.Root>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}