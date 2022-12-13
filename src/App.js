import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import ContactComponentA from './components/container/contact_A';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MicomponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Clock from './components/pure/clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
