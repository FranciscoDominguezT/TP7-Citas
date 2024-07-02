'use client'

import React, { useState, useEffect } from 'react';
import BotonEliminar from '../BotonEliminar';
import CrearCita from '../CrearCita';
import './index.css'

const Cita = ({ cita, eliminarCita, index }) => {
  const { nombreMascota, nombreDueño, fecha, hora, sintomas } = cita;
  return (
    <div className="cita">
      <p className='parrafo'><strong>Mascota:</strong> {nombreMascota}</p>
      <p className='parrafo'><strong>Dueño:</strong> {nombreDueño}</p>
      <p className='parrafo'><strong>Fecha:</strong> {fecha}</p>
      <p className='parrafo'><strong>Hora:</strong> {hora}</p>
      <p className='parrafo'><strong>Síntomas:</strong> {sintomas}</p>
      <BotonEliminar eliminarCita={() => eliminarCita(index)} />
    </div>
  );
}

const AdministrarCita = () => {
  const [citas, setCitas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cargarCitas = () => {
      if (typeof window !== 'undefined') {
        const citasGuardadas = localStorage.getItem('citas');
        if (citasGuardadas) {
          setCitas(JSON.parse(citasGuardadas));
        }
        setIsLoading(false);
      }
    };
    cargarCitas();
  }, []);

  useEffect(() => {
    if (!isLoading && typeof window !== 'undefined') {
      localStorage.setItem('citas', JSON.stringify(citas));
    }
  }, [citas, isLoading]);

  const agregarCita = (nuevaCita) => {
    const nuevasCitas = [...citas, nuevaCita];
    setCitas(nuevasCitas);
  }

  const eliminarCita = (index) => {
    if (window.confirm('¿Estás seguro de eliminar esta cita?')) {
      const citasActualizadas = citas.filter((_, i) => i !== index);
      setCitas(citasActualizadas);
    }
  }


  return (
    <div className="row">
      <div className="two-thirds column">
        <h2 className='title'>Crear mi Cita</h2>
        <CrearCita agregarCita={agregarCita} />
      </div>
      <div className="title">
        <h1>Administra tus citas</h1>
        <div className="lista-citas">
          {citas.length === 0 ? (
            <p>No hay citas</p>
          ) : (
            citas.map((cita, index) => (
              <Cita
                key={index}
                cita={cita}
                eliminarCita={eliminarCita}
                index={index}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default AdministrarCita;