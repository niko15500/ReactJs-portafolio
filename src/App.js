import "./App.css";
import Carusel from "./components/Carusel";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import Saludo from "./components/Saludo";

const miFuncion = () => {};

function App() {
  return (
    <>
      <Header>
        <Navbar></Navbar>
        <ItemListContainer greeting="SALUDO"></ItemListContainer>
        <Carusel></Carusel>
        <Saludo name="Juan" age="15" action={miFuncion} />
        <Saludo name="Ana" age="35" /> 
      </Header>
      {/* <h1 className="titulo">Hola</h1>
        <p className="parrafo">bienvenido a formacion bursatil donde vas a encontrar las mejores inversiones segun tu perfil</p>
        <br></br> */}
    </>
  );
}

export default App;
