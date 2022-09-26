import "./App.css";
import Card from "./components/Card/Card";
import Carusel from "./components/Carousel/Carusel";
import Contador from "./components/Contador";

import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/Navbar";
import Saludo from "./components/Saludo";

const miFuncion = () => {};

function App() {
  return (
    <>
      <Header>
        <Navbar></Navbar>
        <Carusel></Carusel>
        <ItemListContainer></ItemListContainer>
{/*         <Saludo name="Juan" age="15" action={miFuncion} />
        <Saludo name="Ana" age="35"/>
        <Card title="Mi titulo" otroComponente={Saludo}></Card> 
        <Contador></Contador> */}
        
      </Header>
    </>
  );
}

export default App;
