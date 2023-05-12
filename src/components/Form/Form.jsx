import InputForm from "../InputForm/InputForm";
import { useState } from 'react';
import "./Form.css";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../BotonForm/boton";

const Form = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");
    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const { registrarColaborador, crearEquipo } = props;

    const enviarFormColaboradores = (event) => {
        event.preventDefault();
        console.log('envio formulario');
        let datosEnviados = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosEnviados);
    }

    const enviarFormEquipos = (e) => {
        e.preventDefault();
        crearEquipo({ titulo, colorDestaque: color });
    }
 
    return (
        <section className="formulario">
            <form onSubmit={enviarFormColaboradores}>
            <h2>Rellena el formulario para crear colaborador.</h2>
                <InputForm 
                    titulo="Nombre" 
                    placeholder="Ingresar nombre" 
                    required={true} 
                    valor={nombre} 
                    actualizarValor={setNombre} 
                />
                <InputForm 
                    titulo="Puesto" 
                    placeholder="Ingresar puesto" 
                    required
                    valor={puesto} 
                    actualizarValor={setPuesto} 
                />
                <InputForm 
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
            <form onSubmit={enviarFormEquipos}>
            <h2>Rellena el formulario para crear un nuevo equipo.</h2>
                <InputForm 
                    titulo="Título" 
                    placeholder="Ingresar título" 
                    required={true} 
                    valor={titulo} 
                    actualizarValor={setTitulo} 
                />
                <InputForm 
                    titulo="Color" 
                    placeholder="Ingresar el color en Hex" 
                    required
                    valor={color} 
                    actualizarValor={setColor}
                    type='color' 
                />
                <Boton texto='Registrar equipo' />
                </form>
        </section>
    )
}

export default Form;