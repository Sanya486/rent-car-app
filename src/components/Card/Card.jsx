import React from 'react';
import { useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/selectors';
import css from './Card.module.css';
import sprite from '../../images/sprite.svg';

const Card = () => {
  const adverts = useSelector(selectAdverts);
  return (
    adverts && (
      <div className={css.card}>
        <div className={css.photoWrapper}>
          <img
            className={css.photo}
            src={adverts[32].img}
            alt={adverts[0].make}
          />
        </div>
        <div className={css.titleWrapper}>
          <p>
            <span>{adverts[0].make} </span>
            <span className={css.model}>{adverts[0].model} </span>
            <span>{adverts[0].year}</span>
          </p>
          <p>{adverts[0].rentalPrice}</p>
        </div>
        <div className={css.descriptionWrapper}>
          <div className={css.RowOfDesc}>
            <span>Odessa</span>
            <svg className={css.verticalBar}>
              <use href={sprite + '#icon-vertical-bar'}></use>
            </svg>
            <span>Ukraine</span>
            <svg className={css.verticalBar}>
              <use href={sprite + '#icon-vertical-bar'}></use>
            </svg>
            <span>Luxury Car Rental</span>
            <svg className={css.verticalBar}>
              <use href={sprite + '#icon-vertical-bar'}></use>
            </svg>
            <span>Premium</span>
          </div>
          <div className={css.RowOfDesc}>
            <span>Suv</span>
            <svg className={css.verticalBar}>
              <use href={sprite + '#icon-vertical-bar'}></use>
            </svg>
            <span>Enclave</span>
            <svg className={css.verticalBar}>
              <use href={sprite + '#icon-vertical-bar'}></use>
            </svg>
            <span>9582</span>
            <svg className={css.verticalBar}>
              <use href={sprite + '#icon-vertical-bar'}></use>
            </svg>
            <span>Power liftgate</span>
          </div>
        </div>
        <button className={css.btn} type='button'>Learn more</button>
      </div>
    )
  );
};

export default Card;
