import React from 'react';
import LoginButton from './auth0/LoginButton';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthenticationPage from './pages/authenticationPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">Foodre</header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthenticationPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
