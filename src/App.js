import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Particle from './components/Particle';
import Skills from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Particle />
      <Home />
      <Skills />
    </div>
  );
}

export default App;
