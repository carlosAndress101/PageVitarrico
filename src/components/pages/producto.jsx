import React from 'react'
import { useQuery } from "@apollo/client";
import { PRODUCTS} from '../query/Query';
import TablaProducts from '../section/Tabla/TablaProducts';
import HeaderProducts from '../section/header/HeaderProducts';
import "./producto.css"
import Navbar from '../section/menu/navbar/navbar';
import Footer from '../section/footer/footer';

const Products = () => {
    const {data, loading} = useQuery(PRODUCTS)
    console.log(data)
  return (
    <div className='Tabla-Productos'>
        <Navbar/>
        <HeaderProducts/>
        {loading ? <p>Loading...</p> : <TablaProducts customs={data?.Products}/>}
        <Footer/>
    </div>
  )
}

export default Products;
