import "./ListaOpciones.css";

const ListaOpciones = () => {
    //metodo MAP muy usado en React -> arreglo.map( (callback, index) => {
    //  return <option></option> (en este caso)
    //} );
    const equipos =[
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

    return (
        <div className="lista-opciones">
            <label>Equipos</label>
            <select>
                { equipos.map((equipo, index) => <option key={index}>{equipo}</option>) }
                    {/*equipo => equipos[index]*/}
            </select>
        </div>
    )
}

export default ListaOpciones;