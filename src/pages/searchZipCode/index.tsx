import React,{ useState, useEffect} from 'react';
import './searchZipCode.css';
import { ApiIBGE, ApiViacep } from '../../services/api';

import {StatesProps, CountieProps} from '../../interfaces/places';

export function SearchZipCode(){
    const [states, setStates] = useState<StatesProps[]>([]);
    const [stateSelected, setStateSelected] = useState('');

    const [counties, setCounties] = useState<CountieProps[]>([]);
    const [countieSelected, setCountieSelected] = useState('');

    const [publicPlace, setPublicPlace] = useState('');

    useEffect(() => {
        GetStates();
    },[]);

    useEffect(() => {
        GetCounties();
    },[stateSelected]);

    async function GetStates(){
        const api = ApiIBGE();
        const response = await api.get('/localidades/estados?orderBy=nome');
        setStates(response.data);
    }

    async function GetCounties(){
        const arrayState = stateSelected.split('-');
        const idState = arrayState[0];
        const api = ApiIBGE();
        const response = await api.get(`/localidades/estados/${idState}/municipios`);
        setCounties(response.data);
    }

    async function handleFindZipCode(e: React.SyntheticEvent){
        e.preventDefault();
        const arrayState = stateSelected.split('-');
        const arrayCountie = countieSelected.split('-');
        const initialState = arrayState[1];
        const nameCountie = arrayCountie[1];
        
        const api = ApiViacep();
        const response = await api.get(`/${initialState}/${nameCountie}/${publicPlace}/json/`);
        console.log(response.data);
    }

    return(
        <div>
            <form onSubmit={(e: React.SyntheticEvent) => handleFindZipCode(e)}>

                <select
                    value={stateSelected}
                    onChange={(e) => setStateSelected(e.target.value)}
                >
                    <option disabled value=''>Selecione o estado</option>
                    {states?.map(state => {
                        return <option key={state.id} value={`${state.id}-${state.sigla}-${state.nome}`}>{state.nome}</option>
                    })}
                </select>

                <select
                    value={countieSelected}
                    onChange={(e) => setCountieSelected(e.target.value)}
                >
                    <option disabled value=''>Selecione o município</option>
                    {counties?.map(countie => {
                        return <option key={countie.id} value={`${countie.id}-${countie.nome}`}>{countie.nome}</option>
                    })}
                </select>

                <input
                    value={publicPlace} 
                    onChange={(e) => setPublicPlace(e.target.value)}
                    placeholder='Digite o nome do logradouro'
                    type='text'
                />

                <button 
                    type='submit'
                >
                    Pesquisar
                </button>
            </form>
        </div>
    )
}