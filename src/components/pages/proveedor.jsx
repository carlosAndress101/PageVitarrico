import React from 'react';
import Cards2 from '../section/cards2/cards2';
import Footer from '../section/footer/footer';
import Navbar from '../section/Menu/Navbar/Navbar';
import './proveedor.css'

const Provedor = () => {
    return(
        <body className='fondo-provedores'>
            <Navbar/>
            <div className='empresas'>
                <a href="https://surtiagricola.com/" target={'blank'}><Cards2 logo="src\components\image\imagenes-empresas\surtiagricola.png" nombre="Surtiagricola" /></a>
                <a href="https://www.facebook.com/jacobnuts/" target={'blank'}><Cards2 logo="src\components\image\imagenes-empresas\jacob.png" nombre="Jacob Nuts" /></a>
                <a href="https://www.cerealesindustriales.com/" target={'blank'}><Cards2 logo="src\components\image\imagenes-empresas\Cereales industriales.png" nombre="Cereales " /></a>
                <a href="https://web.facebook.com/gdsgranosa/?_rdc=1&_rdr" target={'blank'}><Cards2 logo="src\components\image\imagenes-empresas\34811877_602882706749927_2745653140702363648_n.jpg" nombre="Cereales S.A. " /></a>   
                <a href="http://www.granosur.com/" target={'blank'}><Cards2 logo="src\components\image\imagenes-empresas\images-removebg-preview.png" nombre="GranoSur " /></a>   
                <a href="https://www.computrabajo.com.co/empresas/acerca-de-granos-y-cereales-de-colombia-sa-8478BBCD9DD6E3C6" target={'blank'}><Cards2 logo="src\components\image\imagenes-empresas\imagen 2.png" nombre="Gracere " /></a>   
            </div>
            <Footer/>
        </body>
    )
}
export default Provedor