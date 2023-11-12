import './index.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllCars } from './redux/operations';
import { Toaster } from 'react-hot-toast';


function App() {
  const dispath = useDispatch()
  useEffect(() => {
    dispath(fetchAllCars(1))
  }, [dispath]);
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
