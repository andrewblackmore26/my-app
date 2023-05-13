import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Particle from './components/Particle';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Particle />
      <div>
        <h1>FUCK</h1>
      </div>
      <Home />
    </div>
  );
}

export default App;
