import './Colaborador.css';

const Colaborador = (props) => {
    const { nombre,puesto,foto,equipo } = props.datos;
    const { colorDestaque } = props;

    return (
        <div className='colaborador'>
            <div className='encabezado' style={ {backgroundColor: colorDestaque} }>
                <img src={foto} alt={nombre} />
            </div>
            <div className='info'>
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
            </div>
        </div>
    )
}

export default Colaborador;