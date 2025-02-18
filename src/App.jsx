
import Home from './pages/Home/Home.jsx';
import Favorites from './pages/Favorites/Favorites.jsx';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar.jsx';
import './App.css';

function App() {




  return (
    <div>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
