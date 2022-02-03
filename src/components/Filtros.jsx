import {useState, useEffect} from 'react';

const Filtros = ({setFiltro, filtro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form action="">
            <div className="campo">
                <label htmlFor="">Filtrar gastos</label>
                <select 
                    value={filtro}
                    onChange={e => setFiltro(e.target.value)}
                >
                    <option value="">-- Todos las categorías --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Ahorro</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>
        </form>
    </div>
  )
};

export default Filtros;
