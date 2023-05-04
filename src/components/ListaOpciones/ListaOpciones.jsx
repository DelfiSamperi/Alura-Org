import "./ListaOpciones.css";

const ListaOpciones = (props) => {
    //metodo MAP muy usado en React -> arreglo.map( (callback, index) => {
    //  return <option></option> (en este caso)
    //} );
        
    const handleChange = (e) => {
        props.actualizarValor(e.target.value);
    }
    
    return (
        <div className="lista-opciones">
            <label>Equipos</label>
            <select value={props.valor} onChange={handleChange}>
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                { props.equipos.map((equipo, index) => <option key={index}>{equipo}</option>) }
                    {/*equipo => equipos[index]*/}
            </select>
        </div>
    )
}

export default ListaOpciones;