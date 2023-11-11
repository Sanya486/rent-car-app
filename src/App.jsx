import './index.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import FavoritePage from './pages/FavoritePage.jsx/FavoritePage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllCars } from './redux/operations';


function App() {
  const dispath = useDispatch()
  useEffect(() => {
    dispath(fetchAllCars())
  }, [dispath]);
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/favorites' element={<FavoritePage/>} />
      </Route >
      <Route path='*' element={ <Navigate to='/'/>} />
    </Routes>
  );
}

export default App;
