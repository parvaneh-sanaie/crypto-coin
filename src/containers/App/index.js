import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import CoinList from '../CoinList/Loadable';
import CoinDetail from '../CoinDetail/Loadable';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<CoinList />} />
                <Route exact path="/coins" element={<CoinList />} />
                <Route path="/coins/:coinId" element={<CoinDetail />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
