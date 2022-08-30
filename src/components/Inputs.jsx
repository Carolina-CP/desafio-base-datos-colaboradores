import React from 'react'
import { BaseColaboradores } from './BaseColaboradores';
import { useState } from 'react';

const Inputs = (Props) => {
    // se definen el useState para los input nombre y correo
    const [nuevoNombreColaborador, setNuevoNombreColaborador] = useState('');
    const [nuevoCorreoColaborador, setNuevoCorreoColaborador] = useState('');
    const [nuevoIdColaboradores, setNuevoIdColaboradores] = useState('');

    // se define variable para array original
    const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)

    // función que captura input nombre
    const capturaInputNombre = (n) => {
        setNuevoNombreColaborador(n.target.value)
        console.log(n.target.value)
    }


    // función que captura input correo
    const capturaInputCorreo = (c) => {
        setNuevoCorreoColaborador(c.target.value)
        console.log(c.target.value)

    }

    // función para enviar el formulario
    const enviarFormulario = (e) => {
        e.preventDefault()

        // alerta en caso que el usuario no ingrese los datos solicitados
        if (nuevoNombreColaborador === '') {
            alert("Agrega un nombre");
        } if (nuevoCorreoColaborador === '') {
            alert("Agrega un correo");
        } else {
            console.log('¡Formulario ok!')

            // si los datos estan bien se crea el nuevo array
            setListaColaboradores([...listaColaboradores, { id: nuevoIdColaboradores, nombre: nuevoNombreColaborador, correo: nuevoCorreoColaborador }])
        }
    }

    

// función para filtrar el formulario
    let filtrados= listaColaboradores.filter(colaborador => 
        (colaborador.nombre === Props.buscador || colaborador.correo === Props.buscador)) 
    
console.log (filtrados)


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
                    value={nuevoNombreColaborador}
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

            <div className="h4 pt-2 mb-4 text-black border-top border-secondary">
                Listado de Colaboradores
            </div>

            <ul>
                {listaColaboradores.map(colaborador =>
                    <li key={colaborador.id}>
                        {colaborador.nombre} - {colaborador.correo}</li>)}
            </ul>

        </div>
    )
}

export default Inputs