"use client"

import React, { useState } from 'react';
import Navbar from '@/app/components/navbar';
import './page.css';

const Contacto = () => {
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario, por ejemplo, una llamada a una API o servicio de correo electrónico

        // Una vez que se haya enviado con éxito, establecer el estado de enviado a true
        setEnviado(true);
    }

    const renderForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" placeholder='Ingresa tu nombre'  name="name" required />

                <label htmlFor="email">Correo electrónico</label>
                <input type="email" id="email" placeholder='Ingresa tu correo' name="email" required />

                <label htmlFor="message">Mensaje</label>
                <textarea id="message" placeholder='Ingresa tu consulta'  name="message" required></textarea>

                <button className='boton' type="submit">Enviar</button>
            </form>
        );
    }

    const renderMensaje = () => {
        return <p className='parrafo'>¡El formulario fue enviado correctamente!</p>;
    }

    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
            <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"></link>
            <Navbar />
            <h1 className='title'>Contacto</h1>
            {enviado ? renderMensaje() : renderForm()}
        </div>
    );
}

export default Contacto;
