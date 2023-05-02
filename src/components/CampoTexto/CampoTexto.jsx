import "./CampoTexto.css";

const CampoTexto = (props) => {
    return (
    <div className="campotexto">
        <label>{props.titulo}</label>
        <input placeholder={props.placeholder} />
    </div>
    )
}

export default CampoTexto;