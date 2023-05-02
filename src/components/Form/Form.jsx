import CampoTexto from "../CampoTexto/CampoTexto";
import "./Form.css";
import ListaOpciones from "../../ListaOpciones/ListaOpciones";

const Form = () => {
    return (
        <div className="formulario">
            <form>
            <h2>Rellena el formulario para crear colaborador.</h2>
                <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" />
                <CampoTexto titulo="Puesto" placeholder="Ingresar email" />
                <CampoTexto titulo="Foto" placeholder="Ingresar url de imagen" />
                <ListaOpciones />
            </form>
        </div>
    )
}

export default Form;