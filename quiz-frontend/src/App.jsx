import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizList from './components/QuizList';
import QuizGame from './components/QuizGame';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizList />} />
        <Route path="/quiz/:id" element={<QuizGame />} />
      </Routes>
    </Router>
  );
}

export default App;
