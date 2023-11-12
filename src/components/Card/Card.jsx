import React from 'react';
import css from './Card.module.css';
import sprite from '../../images/sprite.svg';

const Card = ({ advert, key }) => {
  const adressArray = advert.address.split(',');
  const country = adressArray[2];
  const city = adressArray[1];

  return (
    advert && (
      <li key={key} className={css.card}>
        <div className={css.photoWrapper}>
          <img className={css.photo} src={advert.img} alt={advert.make} />
        </div>
        <div className={css.titleWrapper}>
          <p className={css.firstPart}>
            <span>{advert.make} </span>
            <span className={css.model}>{advert.model} </span>
            <span>{advert.year}</span>
          </p>
          <p>{advert.rentalPrice}</p>
        </div>
        <div className={css.descriptionWrapper}>
          <div className={css.RowOfDesc}>
            <span>{city}</span>
            <svg className={css.verticalBar}>
              <use href={sprite + '#icon-vertical-bar'}></use>
            </svg>
            <span>{country}</span>
            <svg className={css.verticalBar}>
              <use href={sprite + '#icon-vertical-bar'}></use>
            </svg>
            <span>{advert.rentalCompany}</span>
            <svg className={css.verticalBar}>
              <use href={sprite + '#icon-vertical-bar'}></use>
            </svg>
            <span>Premium</span>
          </div>
          <div className={css.RowOfDesc}>
            <span>{advert.type}</span>
            <svg className={css.verticalBar}>
              <use href={sprite + '#icon-vertical-bar'}></use>
            </svg>
            <span>{advert.model}</span>
            <svg className={css.verticalBar}>
              <use href={sprite + '#icon-vertical-bar'}></use>
            </svg>
            <span>{advert.id}</span>
            <svg className={css.verticalBar}>
              <use href={sprite + '#icon-vertical-bar'}></use>
            </svg>
            <span>{advert.functionalities[0]}</span>
          </div>
        </div>
        <button className={css.btn} type='button'>
          Learn more
        </button>
      </li>
    )
  );
};

export default Card;
