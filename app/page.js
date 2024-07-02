import React from 'react';
import Link from 'next/link';
import './page.css';
import Navbar from './components/navbar';

const Home = () => {
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"></link>
      <Navbar />
      <h1>Administrador de pacientes</h1>
      <nav>
        <ul>
          <li>
            <Link href="/pages/quienes-somos">
              <div className="card">
                <div className="card2">
                  <p>quienes somos</p>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/pages/reservas">
            <div className="card">
                <div className="card2">
                  <p>reservas</p>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/pages/contacto">
            <div className="card">
                <div className="card2">
                  <p>ayuda</p>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
