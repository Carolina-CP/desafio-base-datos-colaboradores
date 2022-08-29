import React from 'react'

const Inputs = () => {
    return (
        <form className="form-group">
            <label name="nombre-colaborador "
            >Nombre del Colaborador</label>
            <input 
            className="form-control mb-4 mt-2" 
            type="text"
                name="nombre-colaborador"
                placeholder='Ingresa el nombre' />

            <label name="nombre-colaborador "
            >Correo del Colaborador</label>
            <input 
             className="form-control mt-2" 
            type="email"
                name="mail-colaborador"
                placeholder='Ingresa el correo' />

            <button className='btn btn-primary mt-4' type="submit">Agregar Colaborador</button>

        </form>
    )
}

export default Inputs