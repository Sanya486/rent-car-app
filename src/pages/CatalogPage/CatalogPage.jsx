import React, { useState } from 'react';
import CardList from '../../components/CardList/CardList';
import Filter from '../../components/Filter/Filter';

import { useDispatch, useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/selectors';
import { fetchAllCars } from '../../redux/operations';

const CatalogPage = () => {
const dispatch = useDispatch()
  const [page, setPage] = useState(2);

  const handleLoadMore = () => {
    dispatch(fetchAllCars(page));
    setPage(prev => prev + 1)
  };
  const adverts = useSelector(selectAdverts);
  return (
    <div className='container'>
      <Filter />
      <CardList adverts={adverts} handleLoadMore={handleLoadMore} />
    </div>
  );
};

export default CatalogPage;
