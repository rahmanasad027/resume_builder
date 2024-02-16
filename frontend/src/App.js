import logo from './logo.svg';
import './App.css';
import CreateResume from './components/CreateResume/CreateResume';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div data-testid="main-resume-component">
      <Router>
        <Routes>
          <Route exact path='/' element={<CreateResume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
