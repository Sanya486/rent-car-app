import React, { useEffect, useState } from 'react';
import css from './Card.module.css';
import sprite from '../../images/sprite.svg';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../../redux/carSlice';
import { selectFavorites } from '../../redux/selectors';
import Modal from '../Modal/Modal';
import { createPortal } from 'react-dom';

const Card = ({ advert, key }) => {
  const dispatch = useDispatch();
  const adressArray = advert.address.split(',');
  const country = adressArray[2];
  const city = adressArray[1];

  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isModalOpen) {
    window.document.body.style.overflow = 'hidden'
  } else {
    window.document.body.style.overflow = 'auto';
  }

  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    const isCurrentFavorite = favorites.find(
      (favorite) => favorite.id === advert.id
    );
    if (isCurrentFavorite) setIsFavorite(true);
  }, [favorites, advert.id]);

  const handleFavorite = () => {
    if (!isFavorite) {
      dispatch(addToFavorite(advert));
      setIsFavorite(true);
    } else {
      dispatch(removeFromFavorite(advert));
      setIsFavorite(false);
    }
  };
  return (
    advert && (
      <div key={key} className={css.card}>
        <div className={css.photoWrapper}>
          <img className={css.photo} src={advert.img} alt={advert.make} />
          <svg
            className={clsx(
              !isFavorite && css.iconHeart,
              isFavorite && css.iconHeartFavorite
            )}
            onClick={handleFavorite}
          >
            <use href={sprite + '#icon-heart'}></use>
          </svg>
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
        <button
          onClick={() => setIsModalOpen(true)}
          className={css.btn}
          type='button'
        >
          Learn more
        </button>
        {isModalOpen &&
          createPortal(
            <Modal
              advert={advert}
              city={city}
              country={country}
              setIsModalOpen={setIsModalOpen}
            />, document.getElementById('modal')
          )}
      </div>
    )
  );
};

export default Card;
