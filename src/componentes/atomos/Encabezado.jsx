//import './Descripcion.css'
import imagen from '../../assets/imagenes/ImagenPrincipal.png'

function Descripcion() {
    return (
        <>
            <div className='contenedor-encabezado'>
                <div className='encabezado'>
                    <img className='imagen' src={imagen} alt="" />
                    <button className='boton'></button>
                </div>
            </div>
        </>
    )
}

export default Descripcion