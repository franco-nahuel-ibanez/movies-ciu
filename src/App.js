import { Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import MovieScreen from './pages/MovieScreen';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/movie/:id" element={<MovieScreen />} />
    </Routes>
  );
}

export default App;
