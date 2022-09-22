import React, { useState } from 'react';

const Ejercicio3bis = (props) => {
    const[hello, setHello]= useState(props.saludar)

    const cambiarNombre= () =>{
        setHello(props.saludar + "(From Changed Stated)")
    }
    return (
        <div>
            <h2>Hello...{hello}</h2>
            <button onClick={cambiarNombre}>Click Aqui</button>
        </div>
    );
};

export default Ejercicio3bis;