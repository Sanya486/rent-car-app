import React from 'react';

import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import CardList from '../../components/CardList/CardList';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <div className='container'>
      <CardList adverts={favorites} favorites={true}/>
    </div>
  );
};

export default FavoritesPage;
