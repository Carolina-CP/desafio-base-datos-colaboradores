import React from 'react';
import { useState } from 'react';

const Buscador = (Props) => {
 

  return (
    <div>
    <div className="navbar ">
  <div className="container-fluid bg-dark">
    <h3 className="navbar-brand text-white">Buscador de Colaboradores</h3>
    <form className="d-flex" role="search">
      <input className="form-control mr-3" 
      type="search" 
      placeholder="Buscar un colaborador" 
      aria-label="Search"
      onChange={(e) => {Props.setBuscador(e.target.value)}}
      />
    </form>
  </div>
</div>
</div>
  )
}

export default Buscador