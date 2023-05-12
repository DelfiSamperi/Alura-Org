import './equipo.css';
import Colaborador from '../Colaborador/Colaborador';
//paquete para opacar el color npm i hex-to-rgba
//lo aplicamos en el backgroundColor (es una funcion con dos args)
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    const { colorDestaque, colorFondo, titulo, id } = props.datos;
    //pasando colaboradores como props
    const { colaboradores, eliminarColab, actualizarColor, like } = props;

    //ESTILOS
    const BackgroundColor = {
        backgroundColor: hexToRgba(colorDestaque, 0.6)  /*inline styling */
    }
    const EstiloTitulo = { borderColor: colorDestaque };
    /* <h3 style={ borderColor: colorDestaque } > */

    return (
        <>
            {colaboradores.length > 0 &&
                <section className='equipo' style={BackgroundColor} >
                    <input
                        type='color'
                        className='input-color'
                        value={colorDestaque} 
                        onChange={(event) => {
                            actualizarColor(event.target.value, id)
                        }}
                    />
                    
                    <h3 style={EstiloTitulo}> {titulo}</h3>
                    <div className="colaboradores" >
                        {colaboradores.map((colaborador, index) => <Colaborador 
                            datos={colaborador} 
                            key={index}
                            colorDestaque={colorDestaque}
                            eliminarCol={eliminarColab}
                            like={like} 
                            />
                        )}
                    </div>
                </section>
            }
        </>
    )
}

export default Equipo;