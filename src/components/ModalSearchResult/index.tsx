import * as Dialog from '@radix-ui/react-dialog';
import './modalSearchResult.css';
import {AddressProps} from '../../interfaces/places';
import {ItemList} from './ItemList';

interface Props{
    data: AddressProps[];
    closeModal: () => void;
}

export function ModalSearchResult({data, closeModal}: Props){
    
    return(
        <Dialog.Portal className='modal-search-result__portal'>
            <Dialog.Overlay className='modal-search-result__overlay'/>
            <Dialog.Content className='modal-search-result__content'>
                <Dialog.Title className='modal-search-result__title'>
                    Resultados da busca
                </Dialog.Title>
                <div className='modal-search-result__content-result'>
                    {data.map(address => (
                        <ItemList data={address}/>
                    ))}
                </div>
                <div className='modal-search-result__area-btn'>
                    <p className='modal-search-result__text-lengths-address'>
                        Foram encontrado(s) {data.length} endereços para a sua busca.
                    </p>
                    <button
                        className='modal-search-result__btn-goback'
                        onClick={closeModal}
                    >
                        Voltar
                    </button>
                </div>
            </Dialog.Content>
        </Dialog.Portal>
    )
}