import React from 'react';
import { useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/selectors';
import Card from '../Card/Card';
import css from './CardList.module.css';

const CardList = () => {
  const adverts = useSelector(selectAdverts);
  return (
    <ul className={css.wrapper}>
      {adverts &&
        adverts.map((advert, index) => <Card advert={advert} key={index} />)}
    </ul>
  );
};

export default CardList;
