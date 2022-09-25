import './App.css';

const styleP = {
  border: "solid 2px blue",
  padding: "20px"
}
function App() {
  return (
    <>
    <h1 style={{color:"red", textDecoration:"underline"}}>Hola Mundo con React!</h1>
    <p style={styleP}>asd</p>
    <li>1</li>
    <li>2</li>
    
    </>
  );
}

export default App;
