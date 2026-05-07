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
import CounterTwo from './Component/Rendering/RenderingProps/CounterTwo';
import HoveredCounter from './Component/Rendering/RenderingProps/HoveredCounter';
import User from './Component/Rendering/RenderingProps/User';
import Counter from './Component/Rendering/RenderingProps/Counter';
import ClickCounterHOC from './Component/Rendering/HigherOrderComponent/ClickCounterHOC';
import HoverComponentHOC from './Component/Rendering/HigherOrderComponent/HoverComponentHOC';
import UseState from './Component/Hooks/UseState';
import UseEffect from './Component/Hooks/UseEffect';
// import UseRef from './Component/Hooks/UseRef';
import ParentComponent from './Component/Hooks/UseCallBackHook/ParentComponent';
import CounterOne from './Component/Hooks/UseMemo/CounterOne';
import CountOne from './Component/Hooks/UseReducerHook/CountOne';

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
      {/* <RefWithFunctionalComponent /> */}
      {/* -------------------------------------------------------------------- */}

      {/* rendering props */}
      {/* <CounterTwo /> */}
      {/* <HoveredCounter /> */}
      {/* <User render={(isLoggIn) => isLoggIn ? "Ganesh" : "Guest"} /> */}
      {/* <Counter render={(count, incrementCounts) => (<CounterTwo count={count} incrementCount={incrementCounts} />)} />

      <Counter render={(count, incrementCounts) => (<HoveredCounter count={count} incrementCount={incrementCounts} />)} /> */}
      {/* ---------------------------------------------------------------------------------------------------------------------- */}

      {/* higher order component */}
      {/* <ClickCounterHOC /> */}
      {/* <HoverComponentHOC /> */}
      {/* ----------------------------------------------------------------------------------------------- */}

      {/* Hooks  */}
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}

      {/* use call back hook */}
      {/* <ParentComponent /> */}

      {/* use memo hook */}
      {/*<CounterOne/>*/}

      {/* use reducer hook */}
      <CountOne />





    </div>
  );
}

export default App;
