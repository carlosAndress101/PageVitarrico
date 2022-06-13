import { FaUserTag, FaCartPlus, FaTruck } from 'react-icons/fa';
import * as RiIcon from "react-icons/ri";
import * as HiIcons from "react-icons/hi";


export const SiderbarData = [
    {
        title:'Clientes',
        path:'/Cliente',
        icon:<FaUserTag/>,
        cName:'nav-text'
    },
    {
        title:'Pedidos',
        path:'/Pedidos',
        icon:<HiIcons.HiDocumentReport/>,
        cName:'nav-text'
    },
    {
        title:'Productos',
        path:'/Productos',
        icon:<FaCartPlus/>,
        cName:'nav-text'
    },
    
    {
        title:'Proveedores',
        path:'/Proveedores',
        icon:<FaTruck/>,
        cName:'nav-text'
    },
    {
        title:'Vendedores',
        path:'/Vendedores',
        icon:<RiIcon.RiShoppingBag2Fill/>,
        cName:'nav-text'
    }
]