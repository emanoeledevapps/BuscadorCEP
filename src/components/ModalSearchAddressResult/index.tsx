import './modalSearchAddressResult.css';
import * as Dialog from '@radix-ui/react-dialog';
import { AddressProps } from '../../interfaces/places';

interface Props{
    data: AddressProps[];
}

export function ModalSearchAddressResult({data}: Props){
    return(
        <div>
            <Dialog.Portal className='modal-search-address-result__portal'>
                <Dialog.Overlay className='modal-search-address-result__overlay'/>
                <Dialog.Content className='modal-search-address-result__content'>
                    <Dialog.Title className='modal-search-address-result__title'>
                        Resultados da busca
                    </Dialog.Title>
                    <div className='modal-search-address-result__content-address-result'>
                        {data.map(address => (
                            <div key={address.ibge} className='item-list__container'>
                                <div className='item-list__container-texts-info'>
                                    <h3 className='item-list__label-info'>Logradouro:</h3>
                                    <p className='item-list__text-info'>{address.logradouro}</p>
                                </div>
                                <div className='item-list__container-texts-info'>
                                    <h3 className='item-list__label-info'>Município/UF:</h3>
                                    <p className='item-list__text-info'>{address.localidade} - {address.uf}</p>
                                </div>
                                <div className='item-list__container-texts-info'>
                                    <h3 className='item-list__label-info'>Bairro:</h3>
                                    <p className='item-list__text-info'>{address.bairro}</p>
                                </div>
                                <div className='item-list__container-texts-info'>
                                    <h3 className='item-list__label-info'>CEP:</h3>
                                    <p className='item-list__text-info'>{address.cep}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='modal-search-address-result__area-btn'>
                        <Dialog.Close className='modal-search-address-result__btn-goback'>
                            Voltar
                        </Dialog.Close>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </div>
    )
}