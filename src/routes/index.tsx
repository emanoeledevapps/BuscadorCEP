import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { Home } from '../pages/home';
import { SearchAddress } from '../pages/searchAddress';
import { SearchZipCode } from '../pages/searchZipCode';

export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/BuscarEndereco' element={<SearchAddress/>}/>
                <Route path='/BuscarCEP' element={<SearchZipCode/>}/>
            </Routes>
        </BrowserRouter>
    )
}