import React from "react";

const BotonEliminar = ({ eliminarCita }) => {
    return (
        <button className="button-eliminar" onClick={eliminarCita}>Eliminar ×</button>
    )
}

export default BotonEliminar;