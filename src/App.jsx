
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Cliente from './components/pages/clientes'
import Inicio from './components/pages/inicio'
import Login from './components/pages/login'
import Pedido from './components/pages/orden'
import Producto from './components/pages/producto'
import Provedor from './components/pages/proveedor'
import Vendedor from './components/pages/vendedor'

function App() {
  return(
    <div className='App'>
      <Routes>
        <Route path='/' caseSensitive={false} element={<Login/>} />
        <Route path='Inicio' caseSensitive={false} element={<Inicio/>} />
        <Route path='/Cliente' caseSensitive={false} element={<Cliente/>}/>
        <Route path='/Pedidos' caseSensitive={false} element={<Pedido/>}/>
        <Route path='/Productos' caseSensitive={false} element={<Producto/>}/>
        <Route path='/Proveedores' caseSensitive={false} element={<Provedor/>}/>
        <Route path='/Vendedores' caseSensitive={false} element={<Vendedor/>}/>
      </Routes>
    </div>

  )
}

export default App
