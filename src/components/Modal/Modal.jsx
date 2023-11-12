import React, { useEffect } from 'react';
import css from './Modal.module.css';
import sprite from '.././../images/sprite.svg';
import { formatNumberWithCommas } from '../../utils/formatNumber';

const Modal = ({ advert, city, country, setIsModalOpen }) => {
  const { rentalConditions } = advert;
  const rentalCondArray = rentalConditions.split(',');
  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.code === 'Escape') {
        setIsModalOpen(false);
      }
    };
    window.document.body.addEventListener('keydown', handleEscape);
    return () => {
      window.document.body.removeEventListener('keydown', handleEscape);
    };
  }, [setIsModalOpen]);

  return (
    <div className={css.backdrop} onClick={handleBackdrop}>
      <div className={css.modal}>
        <svg onClick={() => setIsModalOpen(false)} className={css.closeBtn}>
          <use href={sprite + '#icon-x'}></use>
        </svg>
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
            <span>Id:{advert.id}</span>
            <svg className={css.verticalBar}>
              <use href={sprite + '#icon-vertical-bar'}></use>
            </svg>
            <span>Year: {advert.year}</span>
            <svg className={css.verticalBar}>
              <use href={sprite + '#icon-vertical-bar'}></use>
            </svg>
            <span>Type: {advert.type}</span>
            <svg className={css.verticalBar}>
              <use href={sprite + '#icon-vertical-bar'}></use>
            </svg>
          </div>
          <div className={css.RowOfDesc}>
            <span>Fuel Consuption: {advert.fuelConsumption}</span>
            <svg className={css.verticalBar}>
              <use href={sprite + '#icon-vertical-bar'}></use>
            </svg>
            <span>Engine Size: {advert.engineSize}</span>
          </div>
        </div>
        <p className={css.description}>{advert.description}</p>
        <h3 className={css.accessoriesTitle}>
          Accessories and functionalities:
        </h3>
        <div className={css.descriptionWrapper}>
          <div className={css.RowOfDesc}>
            <span>{advert.functionalities[0] || '-'}</span>
            <svg className={css.verticalBar}>
              <use href={sprite + '#icon-vertical-bar'}></use>
            </svg>
            <span>{advert.functionalities[1] || '-'}</span>
            <svg className={css.verticalBar}>
              <use href={sprite + '#icon-vertical-bar'}></use>
            </svg>
            <span>{advert.functionalities[2] || '-'}</span>
            <svg className={css.verticalBar}>
              <use href={sprite + '#icon-vertical-bar'}></use>
            </svg>
          </div>
          <div className={css.RowOfDesc}>
            <span>{advert.accessories[0] || '-'}</span>
            <svg className={css.verticalBar}>
              <use href={sprite + '#icon-vertical-bar'}></use>
            </svg>
            <span>{advert.accessories[1] || '-'}</span>
            <svg className={css.verticalBar}>
              <use href={sprite + '#icon-vertical-bar'}></use>
            </svg>
            <span>{advert.accessories[2] || '-'}</span>
            <svg className={css.verticalBar}>
              <use href={sprite + '#icon-vertical-bar'}></use>
            </svg>
          </div>
        </div>
        <h3 className={css.rentalCondTitle}>Rental Conditions: </h3>
        <ul className={css.rentalCondWrapper}>
          <li>
            <p>{rentalCondArray[0]}</p>
          </li>
          <li>
            <p>{rentalCondArray[1]}</p>
          </li>
          <li>
            <p>{rentalCondArray[2]}</p>
          </li>
          <li>
            <p>
              Mileage:{' '}
              <span className={css.model}>
                {advert.mileage ? formatNumberWithCommas(advert.mileage) : '-'}
              </span>
            </p>
          </li>
          <li>
            <p>Price: <span className={css.model}>{advert.rentalPrice}</span></p>
          </li>
        </ul>
        <a className={css.btn} href='tel:+380730000000'>
          Rental car
        </a>
      </div>
    </div>
  );
};

export default Modal;
