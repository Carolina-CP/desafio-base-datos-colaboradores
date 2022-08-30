import React from 'react'


const Listado = () => {
    const colaboradores = ['Jazz', 'Pankeke', 'Michi']
    return (
        <div>
            <div class="h4 pt-2 mb-4 text-black border-top border-secondary">
                Listado de Colaboradores
            </div>

            <ul>
                {colaboradores.map(colaborador => <p key={colaborador}>{colaborador}</p>)}
            </ul>
        </div>
    )
}

export default Listado