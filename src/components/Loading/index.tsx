import * as Dialog from '@radix-ui/react-dialog';
import './loading.css';

export function Loading(){
    return(
        <Dialog.Portal className='loading__portal'>
                <Dialog.Overlay className='loading__overlay'/>
                <Dialog.Content className='loading__content'>
                    <Dialog.Title className='loading__title'>
                        Carregando...
                    </Dialog.Title>
                </Dialog.Content>
        </Dialog.Portal>
    )
}