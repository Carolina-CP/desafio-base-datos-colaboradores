import React from 'react'


const Listado = () => {
    const colaboradores = ['Jazz', 'Pankeke', 'Michi']
  return (
    <div>
        <h3>Listado de Colaboradores</h3>
        <ul> 
            {colaboradores.map(colaborador => <li key={colaborador}>{colaborador}</li>)}
        </ul>
    </div>
  )
}

export default Listado