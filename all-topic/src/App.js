import logo from './logo.svg';
import './App.css';
import Demo from './Component/Demo';
import Props from './Component/Props';
import State from './Component/State';
import ConditionalRendering from './Component/ConditionalRendering';
import ConstructorClassComponent from './Component/Rendering/ClassComponentLifeCycle/ConstructorClassComponent';
import ComponentDidMount from './Component/Rendering/ClassComponentLifeCycle/ComponentDidMount';
import ComponentDidUpdate from './Component/Rendering/ClassComponentLifeCycle/ComponentDidUpdate';
import ShouldComponentUpdate from './Component/Rendering/ClassComponentLifeCycle/ShouldComponentUpdate';
import ComponentWillUnMountOne from './Component/Rendering/ClassComponentLifeCycle/ComponentWillUnMountOne';
import List from './Component/Rendering/ListAndKeys/List';
import RefWithClassComponent from './Component/Rendering/Ref/RefWithClassComponent';
import RefWithFunctionalComponent from './Component/Rendering/Ref/RefWithFunctionalComponent';

function App() {
  return (
    <div className="App">
      {/* props */}
      {/* <Props name="Ganesh" age="25" /> */}
      {/* ------------------------------------------------- */}

      {/* state */}
      {/* <State /> */}

      {/* conditional rendering */}
      {/* <ConditionalRendering /> */}
      {/* --------------------------------------------------------- */}

      {/* component life cycle with class component */}
      {/* <ConstructorClassComponent/> */}
      {/* <ComponentDidMount /> */}
      {/* <ComponentDidUpdate /> */}
      {/* <ShouldComponentUpdate /> */}
      {/* <ComponentWillUnMountOne/> */}
      {/* ----------------------------------------------------------------------------- */}

      {/* list and keys in react */}
      {/* <List />   */}

      {/* ------------------------------------------------------------- */}

      {/* ref class component */}
      {/* <RefWithClassComponent /> */}
      
      {/* ref functional component */}
      <RefWithFunctionalComponent />




    </div>
  );
}

export default App;
