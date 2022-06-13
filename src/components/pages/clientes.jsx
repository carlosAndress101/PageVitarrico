import { useQuery} from "@apollo/client";
import Tablas from "../section/Tabla/Tabla";
import Header from "../section/header/Header";
import { QUERY_CUSTOMER } from "../query/Query";
import Navbar from "../section/menu/navbar/navbar";
import Footer from "../section/footer/footer";
import "./clientes.css"


const Cliente = () => {
const { data, error, loading } = useQuery(QUERY_CUSTOMER);
return (
    <div className="Pagina-clientes">
    <Navbar/>
    <Header/>
    {loading ? <p>Loading... </p> : <Tablas customs={data?.customers} />}
    <Footer/>
    </div>
);
};
export default Cliente;