import Ejercicio1 from "./components/Ejercicio1";
import Ejercicio2 from "./components/Ejercicio2";
import Ejercicio3bis from "./components/Ejercicio3bis";
import "./Style.css"

function App() {
  const ejercicio2 = " My friends";
  return (
    <>
      <section>
        <h1>Practico N°1 React</h1>
      </section>
      <Ejercicio1 />
      <Ejercicio2 saludar={ejercicio2} />
      <Ejercicio3bis saludar={ejercicio2}/>
    </>
  );
}

export default App;