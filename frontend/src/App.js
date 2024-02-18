import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';
import CreateResume from './components/CreateResume/CreateResume';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.clear();
    };

    // Add an event listener to the beforeunload event
    window.addEventListener('beforeunload', clearLocalStorage);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', clearLocalStorage);
    };
  }, []); // Empty dependency array to ensure the effect runs only once
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
