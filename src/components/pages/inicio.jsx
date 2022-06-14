import React from 'react';
import './inicio.css'
import Footer from '../section/footer/footer';
import Navbar from '../section/menu/navbar/navbar';


function Inicio(){
    return(
        <body className='fondo'>
            <Navbar/>
            <div className='home'>
                <h1 className='titulo'>VISITA</h1>
                <h1 className='titulo2'>NUESTRO</h1>
                <a className='pagina-web' href="https://vitarrico.com/" target="blank">SITIO OFICIAL</a>  
            </div>
            <Footer/>
        </body>
            
    )
}
export default Inicio;