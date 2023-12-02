import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstCompoment';
import AnotherComponent from './components/AnotherComponent';
import Images from './components/Images';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Props from './components/Props';
import Fragments from './components/Fragments';
import Container from './components/Container';


function App() {
  return (
    <div className="App">
      <h2>Hello React</h2>

      {/* importar componente */}
      <FirstComponent />
      <AnotherComponent />
      <Images />
      <Hooks />
      <List />
      <RenderCond />
      <Props  x={10} y={20} />
      <Fragments />
      <Container>
        <h1>Este é filho do container</h1>
      </Container>
    </div>
  );
}

export default App;
