import React from 'react'
import { BaseColaboradores } from './BaseColaboradores';
import { useState } from 'react';

const Inputs = () => {
    // se definen el useState para los input nombre y correo
    const [nombreNuevoColaborador, setNombreNuevoColaborador] = useState('');
    const [nuevoCorreoColaborador, setNuevoCorreoColaborador] = useState('');
    const [nuevoIdColaboradores, setNuevoIdColaboradores] = useState('');

    // se define variable para array original
    const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)


    // función para enviar el formulario
    const enviarFormulario = (e) => {
        e.preventDefault()
        console.log('Enviando formulario')
        setListaColaboradores([...listaColaboradores, { id: nuevoIdColaboradores, nombre: nombreNuevoColaborador, correo: nuevoCorreoColaborador}])
    }

    // función que captura input
    const capturaInputNombre = (n) => {
        setNombreNuevoColaborador(n.target.value)
        console.log(n.target.value)
    }

    const capturaInputCorreo = (c) => {
        setNuevoCorreoColaborador(c.target.value)
        console.log(c.target.value)
    }

    return (
        <div>
            <form className="form-group" onSubmit={enviarFormulario}>
                <label name="nombre-colaborador"
                >Nombre del Colaborador</label>
                <input
                    className="form-control mb-4 mt-2"
                    type="text"
                    name="nombre-colaborador"
                    onChange={capturaInputNombre}
                    value={nombreNuevoColaborador}
                    placeholder='Ingresa el nombre' />

                <label name="nombre-colaborador "
                >Correo del Colaborador</label>
                <input
                    className="form-control mt-2"
                    type="email"
                    name="mail-colaborador"
                    onChange={capturaInputCorreo}
                    value={nuevoCorreoColaborador}
                    placeholder='Ingresa el correo' />

                <button className='btn btn-primary mt-4'
                    type="submit"
                >Agregar Colaborador</button>

            </form>

            <ul>
                {listaColaboradores.map(colaborador =>
                    <li key={colaborador.id}>
                        {colaborador.nombre} - {colaborador.correo}</li>)}
            </ul>
        </div>
    )
}

export default Inputs