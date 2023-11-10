import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import FavoritePage from './pages/FavoritePage.jsx/FavoritePage';

function App() {
  return (
    <Routes>
      <Route index element={<Layout />}>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/favorites' element={<FavoritePage/>} />
      </Route >
      <Route path='*' element={ <Navigate to='/'/>} />
    </Routes>
  );
}

export default App;
