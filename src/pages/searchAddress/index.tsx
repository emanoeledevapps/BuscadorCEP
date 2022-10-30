import React, { useState, useEffect, useRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import './searchAddress.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import {useNavigate} from 'react-router-dom';
import MaskedInput from 'react-text-mask';
import { ApiViacep } from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddressProps } from '../../interfaces/places';
import { ModalSearchAddressResult } from '../../components/ModalSearchAddressResult';

export function SearchAddress(){
    const navigate = useNavigate();
    const [zipCodeMasked, setZipCodeMasked] = useState('');
    const [zipCodeUnmasked, setZipCodeUnmasked] = useState('');
    const [addressZipCode, setAddressZipCode] = useState<AddressProps[]>([]);
    const [visibleModal, setVisibleModal] = useState(false);

    async function handleFindAddress(e: React.SyntheticEvent){
        e.preventDefault();
        const address = [];
        const api = ApiViacep();
        const response = await api.get(`/${zipCodeUnmasked}/json/`);
        if(response.data?.erro){
            toast.error('Nenhum endereço encontrado para o CEP informado!')
            return;
        }
        address.push(response.data);
        setAddressZipCode(address);
        setVisibleModal(true);
    }

    return(
        <div>
            <header>
                <Header/>
            </header>
            <main className='search-address__content'>
                <h2 className='search-address__info'>Preencha as informações para realizar a pesquisa</h2>
                <form 
                    onSubmit={(e: React.SyntheticEvent) => handleFindAddress(e)}
                    className='search-address__form'
                >
                    <label 
                        htmlFor='input-zip-code'
                        className='label-input'
                    >
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

                    <div className='form__container-btns'>
                        <button
                            type='button' 
                            onClick={() => navigate(-1)}
                            className='form__btn-goback'
                        >
                            Voltar
                        </button>
                        <button 
                            type='submit'
                            disabled={zipCodeUnmasked.length != 8}
                            className='btn-submit-form'
                        >
                            Pesquisar
                        </button>
                    </div>
                </form>
            </main>
            <footer>
                <Footer/>
            </footer>
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
        </div>
    )
}