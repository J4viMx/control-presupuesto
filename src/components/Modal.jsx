import {useState, useEffect} from 'react';
import Cerrarbtn from '../img/cerrar.svg';
import Mensaje from './Mensaje'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar,setGastoEditar}) => {


    const [nombre, setNombre] = useState ('');
    const [cantidad, setCantidad] = useState ('');
    const [categoria, setCategoria] = useState ('');
    const [mensaje, setMensaje] = useState('');
    const [id, setId] = useState('');
    const [fecha, setFecha] = useState('');
    

    useEffect(() => {
        if( Object.keys(gastoEditar).length ){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    }, []);
    

    const ocultarModal = () => {
        
        setAnimarModal(false);
        setGastoEditar({});
        setTimeout(() => {
            setModal(false);
        }, 500);
    }

    const handleSubmit = e =>{
        e.preventDefault();

        if([nombre, cantidad, categoria].includes('')){
            setMensaje('Todos los campos son Obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000);

            return;
        }
        guardarGasto({nombre, cantidad, categoria, id, fecha})
    }


  return (
        <div className="modal">
            <div className="cerrar-modal">
                <img onClick={ocultarModal} src={Cerrarbtn} alt="cerrar modal" />
            </div>
            <form className={`formulario ${animarModal ? "animar" : "cerrar"} `}
                  onSubmit={handleSubmit}>

                <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje> }
                

                <div className='campo'>
                    <label htmlFor="nombre">Nombre Gasto</label>

                    <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder='Añade el nombre del gasto' id="nombre" />
                </div>
                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>

                    <input type="number" value={cantidad} onChange={e => setCantidad(Number(e.target.value))} placeholder='Añade la cantidad del gasto: ej: 300' id="cantidad" />
                </div>
                <div className='campo'>
                    <label htmlFor="categoria">Categoría</label>

                    <select id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)}> 
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Ahorro</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input type="submit" value={gastoEditar.nombre ? 'Guardar cambios' : 'Añadir Gasto'} />
            </form>
        </div>
    );
};

export default Modal;
