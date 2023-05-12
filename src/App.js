import './App.css';
import { useState } from 'react';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Organizacion from './components/MiOrga/Organizacion.jsx';
import Equipo from './components/MiEquipo/equipo';
import Footer from './Footer/Footer';
//para asignarle ids unicos a cada equipo
import { v4 as uuid } from 'uuid';

function App() {

  const [mostrarForm, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{
    //esto es para ya tener varios colaboradores cargados, si es una organizacion nueva el array comenzaria vacio
    id: uuid(),
    equipo: 'Programación',
    foto: './img/flork1.png',
    nombre: 'Delfi Samperi',
    puesto: 'Coordinador',
    fav: true
  },
  {
    id: uuid(),
    equipo: 'Front End',
    foto: './img/flork2.png',
    nombre: 'Delfi Samperi',
    puesto: 'Coordinador',
    fav: false
  },
  {
    id: uuid(),
    equipo: 'Data Science',
    foto: './img/flork3.png',
    nombre: 'Delfi Samperi',
    puesto: 'Coordinador',
    fav: true
  },
  {
    id: uuid(),
    equipo: 'Devops',
    foto: './img/flork1.png',
    nombre: 'Delfi Samperi',
    puesto: 'Coordinador',
    fav: false
  },
  {
    id: uuid(),
    equipo: 'Front End',
    foto: './img/flork4.png',
    nombre: 'Delfi Samperi',
    puesto: 'Coordinador',
    fav: false
  },
  {
    id: uuid(),
    equipo: 'UX y Diseño',
    foto: './img/flork1.png',
    nombre: 'Delfi Samperi',
    puesto: 'Coordinador',
    fav: false
  },
  {
    id: uuid(),
    equipo: 'UX y Diseño',
    foto: './img/flork2.png',
    nombre: 'Delfi Samperi',
    puesto: 'Coordinador',
    fav: false
  },
  {
    id: uuid(),
    equipo: 'Innovación y Gestión',
    foto: './img/flork1.png',
    nombre: 'Delfi Samperi',
    puesto: 'Coordinador',
    fav: false
  },
  {
    id: uuid(),
    equipo: 'Innovación y Gestión',
    foto: './img/flork3.png',
    nombre: 'Delfi Samperi',
    puesto: 'Coordinador',
    fav: true
  }]);

  const [equipos, actualizarEquipos] = useState([
    // Lista de equipos (de aca se toma la info para todos los cambios en otros componentes)
    {
      id: uuid(),
      titulo: 'Programación',
      colorDestaque: '#57C278',
      colorFondo: '#D9F7E9',
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorDestaque: '#82CFFA',
      colorFondo: '#E8F8FF'
    },
    {
      id: uuid(),
      titulo: 'Data Science',
      colorDestaque: '#A6D157',
      colorFondo: '#F0F8E2'
    },
    {
      id: uuid(),
      titulo: 'Devops',
      colorDestaque: '#E06B69',
      colorFondo: '#FDE7E8'
    },
    {
      id: uuid(),
      titulo: 'UX y Diseño',
      colorDestaque: '#DB6EBF',
      colorFondo: '#FAE9F5'
    },
    {
      id: uuid(),
      titulo: 'Móvil',
      colorDestaque: '#FFBA05',
      colorFondo: '#FFF5D9'
    },
    {
      id: uuid(),
      titulo: 'Innovación y Gestión',
      colorDestaque: '#FF8A29',
      colorFondo: '#FFEEDF'
    },
  ]);

  //esta funcion muestra u oculta el formulario (prop recibida por el componente Organizacion?)
  const cambiarMostrar = () => {
    console.log('cambiarmostrar');
    actualizarMostrar(!mostrarForm);
  }

  //Registro del colaborador (prop recibida por formulario?)
  const registrarColaborador = (colaborador) => {
    console.log("un nuevo colab", colaborador);
    actualizarColaboradores([
      ...colaboradores,
      colaborador,
    ]);
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log('un colaborador borrado', id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
  }

  //actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log('color cambiado', color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id){
        equipo.colorDestaque = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados);
  }

  //CREAR EQUIPO
  const crearEquipo = (nuevoEquipo) => {
    console.log('nuevo equipo');
    actualizarEquipos(
      [...equipos,
      {...nuevoEquipo, id: uuid()}]
    )
  }

  //LIKE de los favoritos
  const like = (id) => {
    console.log('I like it or not')
    const colaboradoresFav = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresFav)
  }
  
  //return es lo que se muestra en nuestra app
  return (
    <div>
      {/*HEADER*/}
      <Header />
 
      {/*FORM
       /* ternario --> condicion ? true : false  
       /* mostrarForm ? <Form /> : <></> */ 
      }
      { mostrarForm && < Form
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }
 
      {/*ORGANIZACION*/}
      <Organizacion cambiarMostrar={cambiarMostrar} />

      {/*CADA EQUIPO*/}
      {equipos.map((equipo) => <Equipo
        datos={equipo}
        key={equipo.titulo}
        /*MAPEA CADA COLABORADOR*/
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColab = {eliminarColaborador}
        actualizarColor = {actualizarColor}
        like={like}
        />
      )}

      {/*FOOTER*/}
      <Footer />

    </div>

  );
}

export default App;
