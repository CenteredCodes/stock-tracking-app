import * as React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { StockOverViewPage } from './pages/StockOverviewPage';
import { StockDetailPage } from './pages/StockDetailPage';
import './App.css'
import {WatchListContextProvider} from "./context/watchListContext"

function App() {
    return (
        <main className='container'>
        <WatchListContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<StockOverViewPage />} />
                    <Route path="/detail/:symbol" element={<StockDetailPage />} />
                </Routes>
            </BrowserRouter>
        </WatchListContextProvider>
        </main>
    )
};

export default App;

// 5:28:40