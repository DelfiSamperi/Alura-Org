import './equipo.css';
import Colaborador from '../Colaborador/Colaborador';

const Equipo = (props) => {
    const { colorDestaque, colorFondo, titulo } = props.datos;
    //pasando colaboradores como props
    const { colaboradores } = props;

    //ESTILOS
    const BackgroundColor = {
        backgroundColor: colorFondo /*inline styling */
    }
    const EstiloTitulo = { borderColor: colorDestaque };
    /* <h3 style={ borderColor: colorDestaque } > */

    return (
        <>
            {colaboradores.length > 0 &&
                <div className='equipo' style={BackgroundColor} >
                    <h3 style={EstiloTitulo}> {titulo}</h3>
                    <div className="colaboradores" >
                        {colaboradores.map((colaborador, index) => <Colaborador 
                            datos={colaborador} 
                            key={index}
                            colorDestaque={colorDestaque}  />
                        )}
                    </div>
                </div>
            }
        </>
    )
}

export default Equipo;