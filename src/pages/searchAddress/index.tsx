import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './searchAddress.css';

//Material UI
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MaskedInput from 'react-text-mask';
import * as Dialog from '@radix-ui/react-dialog';

//Services and Interfaces
import { ApiViacep } from '../../services/api';
import { AddressProps } from '../../interfaces/address';

//Components
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Loading } from '../../components/Loading';
import { ModalSearchAddressResult } from '../../components/ModalSearchAddressResult';

//Icons
import {MdLocationCity, MdOutlineArrowBackIos} from 'react-icons/md';
import {FaSearch} from 'react-icons/fa';

export function SearchAddress(){
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [zipCodeMasked, setZipCodeMasked] = useState('');
    const [zipCodeUnmasked, setZipCodeUnmasked] = useState('');
    const [addressZipCode, setAddressZipCode] = useState<AddressProps[]>([]);
    const [visibleModal, setVisibleModal] = useState(false);

    async function handleFindAddress(e: React.SyntheticEvent){
        e.preventDefault();
        setLoading(true);
        const address = [];
        const api = ApiViacep();
        const response = await api.get(`/${zipCodeUnmasked}/json/`);
        if(response.data?.erro){
            setLoading(false);
            toast.error('Nenhum endereço encontrado para o CEP informado!')
            return;
        }
        address.push(response.data);
        setAddressZipCode(address);
        setLoading(false);
        setVisibleModal(true);
    }

    return(
        <>
            <header>
                <Header/>
            </header>
            <main className='search-address__content'>
                <h2 className='search-address__info'>Preencha as informações para realizar a pesquisa</h2>
                <form 
                    onSubmit={(e: React.SyntheticEvent) => handleFindAddress(e)}
                    className='search-address__form'
                >
                    <div className='container-input'>
                        <label 
                            htmlFor='input-zip-code'
                            className='label-input'
                        >
                            <MdLocationCity size={20} color='#000'/>
                            CEP
                        </label>
                        <MaskedInput
                            mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                            className="input"
                            placeholder="Digite o CEP"
                            guide={true}
                            id="input-zip-code"
                            value={zipCodeMasked}
                            onChange={(e) => {
                                setZipCodeMasked(e.target.value);
                                setZipCodeUnmasked(e.target.value.replace('-','').replace('_____','').replace('__','').replace('_',''));
                            }}
                            required
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
                            disabled={zipCodeUnmasked.length != 8}
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
            <Dialog.Root 
                open={visibleModal} 
                onOpenChange={(open) => setVisibleModal(open)}
            >
                <ModalSearchAddressResult data={addressZipCode}/>
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
        </>
    )
}