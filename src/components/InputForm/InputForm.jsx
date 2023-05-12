import "./InputForm.css";

const InputForm = (props) => {
    //destructuracion del tipo de cada input del form (son todos text, que lo pasamos por aca, menos el que queremos recibir color)
    const { type='text' } = props;
    console.log(type);

    const HandleChange = (e) => {
        props.actualizarValor(e.target.value);
    }

    return (
    <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={props.placeholder} 
            required={props.required}
            value={props.valor}
            onChange={HandleChange}
            type={type}
        />
    </div>
    )
}

export default InputForm;