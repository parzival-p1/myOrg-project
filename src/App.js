import { useState } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import Header from './components/header/header.js';
import Form from './components/form/formulario.js';
import MiOrg from './components/miOrg';
import Equipo from './components/equipos';
import Footer from './components/footer';

function App() {
  const [mostrarForm, actualizarMostrar] = useState(false);
  const [colaborators, updateColabs] = useState([{
    id: uuid(),
    team: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    team: "Front End",
    foto: "https://github.com/parzival-p1.png",
    nombre: "Paco Hdez",
    puesto: "Software Developer",
    fav: true
  },
  {
    id: uuid(),
    team: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    team: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    team: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: true
  },
  {
    id: uuid(),
    team: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: true
  }]);

  //^ Lista de equipos
  const [teams, updateTeams] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorSec: "#D9F7E9",
      colorPrim: "#57C278"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorSec: "#E8F8FF",
      colorPrim: "#82CFFA"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorSec: "#F0F8E2",
      colorPrim: "#A6D157"
    },
    {
      id: uuid(),
      titulo: "DevOps",
      colorSec: "#FDE7E8",
      colorPrim: "#E06B69"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorSec: "#FAE9F5",
      colorPrim: "#DB6EBF"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorSec: "#FFF5D9",
      colorPrim: "#FFBA05"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorSec: "#FFEEDF",
      colorPrim: "#FF8A29"
    }
  ])

   //^ Op Ternario --> condicion ? seMuestra : noSeMuestra
  //^ condicion && seMuestra

  const cambiarMostrar = () => {[]
    actualizarMostrar(!mostrarForm) 
  }

  //^ Registrar colaborador
  const registerColab = (colaborator) => {

    //? Spread operator (hace una copia de los values prev guardados)
    updateColabs([...colaborators, colaborator]) //^recibe el nuevo valor y lo agrega
  }

  //^Eliminar colaborador
  const eliminarColab = (id) => {
    const newColabs = colaborators.filter((colaborator) => colaborator.id != id); // returns new arr withouth modifying the og one
    updateColabs(newColabs);
  }

  //^ Actualizar color de equipo
  const updateColor = (color, id) => {
    const updatedTeams = teams.map((team) => {
      if (team.id === id) {
        team.colorPrim = color;
      }

      return team;
    })

    updateTeams(updatedTeams);
  }

  //^Crear equipo Func
  const crearTeam = (newTeam) => {
    updateTeams([...teams, { ...newTeam, id: uuid() }])
  }

  const like = (id) => {
    const updatedColabs = colaborators.map((colaborator) => {
      if(colaborator.id === id) {
        colaborator.fav = !colaborator.fav
      }
      return colaborator
    })
    updateColabs(updatedColabs);
  }

  return (
    <div>
      {/*  { mostrarForm && <Form /> } 2a op de ternario */}  
      <Header />
      { 
        mostrarForm && <Form 
          teams={teams.map((team) => team.titulo)} 
          registerColab = { registerColab }
          crearTeam = { crearTeam }
        />
      }
      
      <MiOrg cambiarMostrar = { cambiarMostrar } />

      {
        teams.map((team) => <Equipo  // al trabajar con map siempre utilizar key
          datos={ team } 
          key={team.titulo} 
          colaborators={colaborators.filter( colaborator => colaborator.team === team.titulo )}
          eliminarColab = { eliminarColab }
          updateColor = { updateColor }
          like = { like }
        />  
        )
      }

      <Footer />

    </div>
  );
}

export default App;

