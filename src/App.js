// import logo from './assets/g4.jpg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
// import { useTitle } from 'react-use';

// const MyComponent = () => {
//   useTitle('My Title');

//   return null;
// }
function App() {
  return (
    <Router>
      <Routes> </Routes>
    </Router>
  );
}

export default App;
