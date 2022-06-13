import './card.css'

function Card(props){
    return(
        <div className='Tarjeta'>
            <img src={props.imagen} alt="imagen" />
            <h1>{props.titulo}</h1>
            <h4>{props.ingredientes}</h4>
            <h5>{props.precio}</h5>
        </div>
    )
}

export default Card;