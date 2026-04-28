import logo from './logo.svg';
import './App.css';
import Demo from './Component/Demo';
import Props from './Component/Props';
import State from './Component/State';
import ConditionalRendering from './Component/ConditionalRendering';

function App() {
  return (
    <div className="App">
      {/* props */}
      {/* <Props name="Ganesh" age="25" /> */}
      {/* ------------------------------------------------- */}

      {/* state */}
      {/* <State /> */}

      {/* conditional rendering */}
      <ConditionalRendering />

    </div>
  );
}

export default App;
