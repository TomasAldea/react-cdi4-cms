// src/components/AppRouter.js
import React from 'react';
import { Routes, Route, BrowserRouter, HashRouter, Navigate } from "react-router-dom"
import { Home } from '../components/Home';
import { About } from '../components/About';
import { Header } from '../components/Header';
import { Formulario } from '../components/Formulario';
import { ImagenSimple } from '../components/Header';
import { TextoSeo } from '../components/TextoSeo';


export const AppRouter = () => {
  return (
    <HashRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </HashRouter>
  );
}
