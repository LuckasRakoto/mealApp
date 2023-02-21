import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthenticationPage from './pages/authenticationPage';
import MembersPage from './pages/membersDisplayPage';
import TeamsPage from './pages/teamsPage';
import CreateMealPage from './pages/createMealPage ';
import MealPage from './pages/mealDisplayPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">Foodre</header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthenticationPage/>} />
          <Route path="teams" element={<TeamsPage />} />
          <Route path="meal" element={<MealPage />} />
          <Route path="teams/:teamId" element={<MembersPage />}/>
          <Route path="meals/create" element={<CreateMealPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
