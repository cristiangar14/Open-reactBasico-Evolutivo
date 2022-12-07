import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import ContactComponentA from './components/container/contact_A';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MicomponenteConContexto from './hooks/Ejemplo3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TaskListComponent/> */}
        {/* <ContactComponentA></ContactComponentA> */}
        {/* Ejemplos de uso de Hooks */}
        <MicomponenteConContexto/>
        <Ejemplo2/>
        <Ejemplo1/>
      </header>
    </div>
  );
}

export default App;
