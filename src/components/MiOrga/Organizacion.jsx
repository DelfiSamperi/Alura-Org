import { useState } from 'react';
import "./Organizacion.css";

const Organizacion = (props) => {
    //Estados-Hooks
    //useState
    
    return (
        <div className="org">
            <h3 className="title">Mi Organización </h3>
            <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
            
        </div>
    )
}

export default Organizacion;