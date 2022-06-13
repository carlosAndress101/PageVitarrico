import './cards2.css'
function Cards2(props){
    return(
        <div className="Tarjeta2">
            <img className='logo-empresa' src={props.logo} alt="logo" />
            <h4 className='nombre-empresa'>{props.nombre}</h4>
            
        </div>
    )
}

export default Cards2;