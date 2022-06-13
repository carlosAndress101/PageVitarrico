import React from 'react'
import { useQuery } from "@apollo/client";
import { ORDERS } from '../query/Query'
import TablaOrders from '../section/Tabla/TablaOrders';
import Navbar from '../section/menu/navbar/navbar';
import Footer from '../section/footer/footer';
import HeaderOrder from '../section/header/HeaderOrder';
import "./orden.css"

const Pedido = () => {
const {data, loading} = useQuery(ORDERS)
return (
    <div className='Pagina-Pedidos'>
    <Navbar/>
    <HeaderOrder/>
    {loading ? <p>Loading...</p> : <TablaOrders customs={data?.Orders}/>}
    <Footer/>
    </div>
)
}

export default Pedido