import "./App.css";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Navbar from "./components/Header";
import Saludo from "./components/Saludo";

const miFuncion = () => {
  
  
}

function App() {
  return (
    <>
      <Header/>
      <Carousel/>
      <Saludo name="Juan"age="15" action={miFuncion}/>
      <br></br>
      <Saludo name="Ana"age="35"/>
    </> 
  );
}

export default App;
