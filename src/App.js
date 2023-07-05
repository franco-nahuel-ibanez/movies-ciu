import { Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import MovieScreen from './pages/MovieScreen';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavoritesScreen from './pages/FavoritesScreen';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/:favoritas" element={<FavoritesScreen />} />
        <Route path="/:type/:id" element={<MovieScreen />} />
      </Routes>
    </>
  );
}

export default App;
