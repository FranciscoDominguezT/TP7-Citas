import React, { useState } from 'react';
import './index.css'

const CrearCita = ({ agregarCita }) => {
    const [nombreMascota, setNombreMascota] = useState('');
    const [nombreDueño, setNombreDueño] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');

    const handleAgregarCita = (e) => {
        e.preventDefault();
        if (nombreMascota.trim() === '' || nombreDueño.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            alert('Por favor, complete todos los campos');
            return;
        }

        if (window.confirm('¿Estás seguro de agregar esta cita?')) {
            const nuevaCita = { nombreMascota, nombreDueño, fecha, hora, sintomas };
            agregarCita(nuevaCita);
            // Limpiar los campos del formulario después de agregar la cita
            setNombreMascota('');
            setNombreDueño('');
            setFecha('');
            setHora('');
            setSintomas('');
        }
    }

    return (
        <div className="form-container"> {/* Contenedor del formulario */}
            <form onSubmit={handleAgregarCita}>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    value={nombreMascota}
                    onChange={(e) => setNombreMascota(e.target.value)}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño de la mascota"
                    value={nombreDueño}
                    onChange={(e) => setNombreDueño(e.target.value)}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    value={hora}
                    onChange={(e) => setHora(e.target.value)}
                />
                <label>Sintomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value)}
                ></textarea>
                <button type="submit" className="u-full-width button-primary">
                    Agregar Cita
                </button>
            </form>
        </div>
    );
}

export default CrearCita;

