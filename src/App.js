// import logo from './assets/g4.jpg';
import './App.css';

import Home from './views/home.js';
import Aboutus from './views/aboutus.js';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
function App() {
  return (
    <Router>
      <Routes> </Routes>
    </Router>
  );
}

export default App;
