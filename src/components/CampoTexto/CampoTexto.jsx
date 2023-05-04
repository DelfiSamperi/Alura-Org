import "./CampoTexto.css";

const CampoTexto = (props) => {

    const HandleChange = (e) => {
        props.actualizarValor(e.target.value);
    }


    return (
    <div className="campotexto">
        <label>{props.titulo}</label>
        <input 
            placeholder={props.placeholder} 
            required={props.required}
            value={props.valor}
            onChange={HandleChange}
        />
    </div>
    )
}

export default CampoTexto;