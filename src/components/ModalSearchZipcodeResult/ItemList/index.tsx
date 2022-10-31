import './itemList.css';

//Interfaces
import {AddressProps} from '../../../interfaces/address';
interface Props{
    data: AddressProps;
}

export function ItemList({data}: Props){
    return(
        <div className='item-list__container'>
            <div className='item-list__container-texts-info'>
                <h3 className='item-list__label-info'>CEP:</h3>
                <p className='item-list__text-info'>{data.cep}</p>
            </div>

            <div className='item-list__container-texts-info'>
                <h3 className='item-list__label-info'>Código do logradouro:</h3>
                <p className='item-list__text-info'>{data.ibge}</p>
            </div>

            <div className='item-list__container-texts-info'>
                <h3 className='item-list__label-info'>Município:</h3>
                <p className='item-list__text-info'>{data.localidade}</p>
            </div>
            
            <div className='item-list__container-texts-info'>
                <h3 className='item-list__label-info'>Bairro:</h3>
                <p className='item-list__text-info'>{data.bairro}</p>
            </div>

            <div className='item-list__container-texts-info'>
                <h3 className='item-list__label-info'>Logradouro:</h3>
                <p className='item-list__text-info'>{data.logradouro}</p>
            </div>
        </div>
    )
}