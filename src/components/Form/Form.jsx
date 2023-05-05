import CampoTexto from "../CampoTexto/CampoTexto";
import { useState } from 'react';
import "./Form.css";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../BotonForm/boton";

const Form = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("")
    
    const { registrarColaborador } = props;

    const enviarForm = (event) => {
        event.preventDefault();
        let datosEnviados = {
            nombre,
            puesto,
            foto,
            equipo
        }
        props.registrarColaborador(datosEnviados);
        
    }
 
    return (
        <div className="formulario">
            <form onSubmit={enviarForm}>
            <h2>Rellena el formulario para crear colaborador.</h2>
                <CampoTexto 
                    titulo="Nombre" 
                    placeholder="Ingresar nombre" 
                    required={true} 
                    valor={nombre} 
                    actualizarValor={setNombre} 
                />
                <CampoTexto 
                    titulo="Puesto" 
                    placeholder="Ingresar puesto" 
                    required
                    valor={puesto} 
                    actualizarValor={setPuesto} 
                />
                <CampoTexto 
                    titulo="Foto" 
                    placeholder="Ingresar url de imagen"
                    valor={foto} 
                    actualizarValor={setFoto}
                />
                <ListaOpciones 
                    valor={equipo} 
                    actualizarValor={setEquipo}
                    equipos={props.equipos}
                />
                <Boton texto="Crear"/>    
            </form>
        </div>
    )
}

export default Form;