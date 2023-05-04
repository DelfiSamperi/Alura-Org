import './equipo.css';
import Colaborador from '../Colaborador/Colaborador';

const Equipo = (props) => {
    const { colorDestaque, colorFondo, titulo } = props.datos;

    const BackgroundColor = {
        backgroundColor: colorFondo /*inline styling */
    }
    const EstiloTitulo = { borderColor: colorDestaque };
    /* <h3 style={ borderColor: colorDestaque } > */
    return (
        <div className='equipo' style={BackgroundColor} >
            <h3 style={ EstiloTitulo } >{titulo}</h3>
            <div className="colaboradores"></div>
            <Colaborador />
            <Colaborador />
            
        </div>
    )
}

export default Equipo;