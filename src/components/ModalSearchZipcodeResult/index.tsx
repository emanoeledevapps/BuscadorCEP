import {MdOutlineArrowBackIos} from 'react-icons/md';
import {ItemList} from './ItemList';

//Material UI
import * as Dialog from '@radix-ui/react-dialog';
import './modalSearchZipcodeResult.css';

//Interfaces
import {AddressProps} from '../../interfaces/address';
interface Props{
    data: AddressProps[];
}

export function ModalSearchZipcodeResult({data}: Props){
    
    return(
        <Dialog.Portal className='modal-search-result__portal'>
            <Dialog.Overlay className='modal-search-result__overlay'/>
            <Dialog.Content className='modal-search-result__content'>
                <Dialog.Title className='modal-search-result__title'>
                    Resultados da busca
                </Dialog.Title>
                <div className='modal-search-result__content-result'>
                    {data.map(address => (
                        <ItemList key={address.cep} data={address}/>
                    ))}
                </div>
                <div className='modal-search-result__area-btn'>
                    <p className='modal-search-result__text-lengths-address'>
                        Foram encontrado(s) {data.length} endereço(s) para a sua busca.
                    </p>
                    <Dialog.Close
                        className='form__btn-goback'
                    >
                        <MdOutlineArrowBackIos size={20} color='#387EFF'/>
                        Voltar
                    </Dialog.Close>
                </div>
            </Dialog.Content>
        </Dialog.Portal>
    )
}