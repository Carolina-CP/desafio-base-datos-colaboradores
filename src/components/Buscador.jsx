import React from 'react'

const Buscador = () => {
 

  return (
    <div>
    <div className="navbar ">
  <div className="container-fluid bg-dark">
    <h3 className="navbar-brand text-white">Buscador de Colaboradores</h3>
    <form className="d-flex" role="search">
      <input className="form-control mr-3" type="search" placeholder="Busca un colaborador" aria-label="Search"/>
    </form>
  </div>
</div>
</div>
  )
}

export default Buscador