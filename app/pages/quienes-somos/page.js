import React from 'react';
import Navbar from '@/app/components/navbar';
import './page.css'

const QuienesSomos = () => {
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"></link>
      <Navbar />
      <h1 className='title'>Quienes Somos</h1>
      <p className='parrafo'>Somos petcare, una empresa dedicada a garantizar el bienestar de tus mascotas con la mejor atención y el mejor cuidado. Nos encargamos de ayudarte con cualquier problema que veas en tu mascota</p>
    </div>
  );
};

export default QuienesSomos;