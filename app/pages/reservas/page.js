import React from 'react';
import Navbar from '@/app/components/navbar';
import AdministrarCita from '@/app/components/AdministrarCita';
import './page.css'

const Reservas = () => {
    return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"></link>
        <Navbar />
        <h1 className='title'>Reservas</h1>
        <AdministrarCita />
      </div>
    );
  };
  
  export default Reservas;