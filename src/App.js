import './App.css';
import Cards from './components/Cards/Cards';
import Login from './components/Login/Login';
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import { useState } from 'react';
import Board from './components/Board/Board';

function App() {
  const [isUser, setIsUser] = useState(false)

  return (
    <div className="main">
      {/* {
        isUser && <Header setIsUser={setIsUser}  />
      } */}
      <Routes>
        <Route path="/" element={<Login setIsUser={setIsUser} />} />
        <Route path="/game" element={<Cards setIsUser={setIsUser} />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
