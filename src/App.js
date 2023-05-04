import './App.css';
import { useState } from 'react';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Organizacion from './components/MiOrga/Organizacion.jsx';
import Equipo from './components/MiEquipo/equipo';

function App() {

  const [mostrarForm, actualizarMostrar] = useState(true);
  /* ternario --> condicion ? true : false  */

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm);
  }

  const equipos = [
    {
      titulo: 'Programación',
      colorDestaque: '#57C278',
      colorFondo: '#D9F7E9'
    },
    {
      titulo: "Front End",
      colorDestaque: '#82CFFA',
      colorFondo: '#E8F8FF'
    },
    {
      titulo: 'Data Science',
      colorDestaque: '#A6D157',
      colorFondo: '#F0F8E2'
    },
    {
      titulo: 'Devops',
      colorDestaque: '#E06B69',
      colorFondo: '#FDE7E8'
    },
    {
      titulo: 'UX y Diseño',
      colorDestaque: '#DB6EBF',
      colorFondo: '#FAE9F5'
    },
    {
      titulo: 'Móvil',
      colorDestaque: '#FFBA05',
      colorFondo: '#FFF5D9'
    },
    {
      titulo: 'Innovación y Gestión',
      colorDestaque: '#FF8A29',
      colorFondo: '#FFEEDF'
    },
  ]

  return (
    <div>
      
      <Header />
      { /* mostrarForm ? <Form /> : <></> */ }
      { mostrarForm && < Form equipos={ equipos.map((equipo) => equipo.titulo) } /> }
      <Organizacion cambiarMostrar={cambiarMostrar} />
      
      { equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo}/>) }

    </div>

  );
}

export default App;
