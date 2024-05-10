import './Tarjeta.css'
import Descripcion from '../atomos/Descripcion.jsx'
import Encabezado from '../atomos/Encabezado.jsx'
function Tarjeta() {
    return (
        <>
            <div className='contenedor-tarjeta'>
                <div className='tarjeta'>
                    <Encabezado />
                    <Descripcion />
                </div>
            </div>
        </>
    )
}

export default Tarjeta