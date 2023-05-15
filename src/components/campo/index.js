import { useState } from "react";
import "./campo.css"

const Campo = (props) => {
    const placeHolderModified = `${props.placeholder}...`;

    //^ Destructuring
    const { type = "text" } = props

    const driveChange = (e) => {
        props.actualizarValor(e.target.value);
    }
    
    return <div className={ `campo campo-${type}` }>
        <label>{ props.titulo }</label>
        <input 
            placeholder={ placeHolderModified } 
            required={props.required} 
            value={props.valor} 
            onChange={driveChange}
            type={ type }
        />
    </div>
}

export default Campo