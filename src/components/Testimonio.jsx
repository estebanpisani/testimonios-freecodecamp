import React from 'react';
import '../styles/Testimonio.css';

function Testimonio(props) {
    return(
        <div className='contenedor-testimonio'>
            <img 
                className='imagen-testimonio' 
                src={require(`../assets/${props.imagen}`)} 
                alt="Foto de testigo" />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'><strong>{props.nombre}</strong> in {props.pais}</p>
                <p className='cargo-testimonio'>{props.cargo} at <strong>{props.empresa}</strong></p>
                <p className='texto-testimonio'>{props.testimonio}</p>
            </div>
        </div>
    );
}

export default Testimonio;