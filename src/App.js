import "./App.css";
import TaskListComponent from "./components/container/task_list";
import ContactComponentA from "./components/container/contact_A";
import Ejemplo1 from "./hooks/Ejemplo1";
import Ejemplo2 from "./hooks/Ejemplo2";
import MicomponenteConContexto from "./hooks/Ejemplo3";
import Ejemplo4 from "./hooks/Ejemplo4";
import GreetingStyled from "./components/pure/greetingStyled";
import Clock from "./components/pure/clock";
import Father from "./components/container/father";
import OptionalRender from "./components/pure/optionalRender";
import ChangeColor from "./components/pure/changeColor";
import LoginFormik from "./components/pure/forms/loginFormik";
import RegisterFormik from "./components/pure/forms/registerFormik";
import AsyncExample from "./components/pure/AsyncExample";
import ObservableExample from "./components/pure/ObservableExample";
import FetchExample from "./components/pure/FetchExample";
import AxiosExample from "./components/pure/AxiosExample";
import ChuckExample from "./components/pure/chuckExample";
import AxiosCRUDExample from "./components/pure/AxiosCRUDExample";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <Clock/> */}
      {/* <GreetingStyled name="Cristian"></GreetingStyled> */}
      {/* <TaskListComponent/> */}
      {/* <ContactComponentA></ContactComponentA>
        {/* Ejemplos de uso de Hooks */}
      {/* <Ejemplo4 nombre="Cristian">
          <h3>Este contenido es la props.children</h3>
        </Ejemplo4>
        <MicomponenteConContexto/>
        <Ejemplo2/>
        <Ejemplo1/> */}
      {/* </header> */}
      {/* <Father></Father> */}
      {/* Ejemplos de renderizado condicional */}
      {/* <OptionalRender />
      <ChangeColor /> */}
      {/* <LoginFormik/> */}
      {/* <RegisterFormik/> */}
      {/* Ejemplos de procesos asincronos */}
      {/* <AsyncExample/> */}
      {/* <ObservableExample/> */}
      {/* <FetchExample/> */}
      {/* <AxiosExample/> */}
      {/* <ChuckExample/> */}
      <AxiosCRUDExample/>
      {/* <TaskListComponent></TaskListComponent> */}
    </div>
  );
}

export default App;
