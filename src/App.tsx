import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthenticationPage from './pages/authenticationPage';
import TeamsPage from './pages/teamsDisplayPage';
import MealsPage from './pages/mealDisplayPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">Foodre</header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthenticationPage/>} />
          <Route path="teams" element={<TeamsPage />} />
          <Route path="meals" element={<MealsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
