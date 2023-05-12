import './Colaborador.css';
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, fav } = props.datos;
    const { colorDestaque, eliminarCol, like } = props;

    return (
        <div className='colaborador'>
            <AiFillCloseCircle className='eliminar' onClick={() => eliminarCol(id)} />
            <div className='encabezado' style={{ backgroundColor: colorDestaque }}>
                <img src={foto} alt={nombre} />
            </div>
            <div className='info'>
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                { /*Operador Ternario => Condicion ? true : false */}
                { fav ? <AiFillHeart color='red' onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} /> }
            </div>
        </div>
    )
}

export default Colaborador;