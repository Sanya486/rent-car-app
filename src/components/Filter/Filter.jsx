import React, { useState } from 'react';
import css from './Filter.module.css';
import sprite from '../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { fetchFilteredCars } from '../../redux/operations';

const makes = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Mercedes-Benz',
  'Chrysler',
  'Kia',
  'Land',
];

const prices = [];
for (let i = 30; i <= 500; i += 10) {
  prices.push(i);
}

const Filter = () => {
  const dispatch = useDispatch()

  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isPricedOpen, setIsPriceOpen] = useState(false);

  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const handleSubmit = () => {
    if (!brand) {
      return
    }
    const filterObj = {
      brand,
      price,
      mileageFrom,
      mileageTo,
    };
    dispatch(fetchFilteredCars(filterObj))
  };

  return (
    <div className={css.filter}>
      <label className={css.carBrand}>
        Car brand
        <div
          style={{ position: 'relative' }}
          onMouseEnter={() => setIsBrandOpen(true)}
          onMouseLeave={() => setIsBrandOpen(false)}
        >
          <input
            value={brand}
            readOnly
            placeholder='Enter the text'
            className={css.iconPadding}
            type='text'
          />
          <svg className={css.icon}>
            <use href={sprite + '#icon-chevron-down'}></use>
          </svg>
          {isBrandOpen && (
            <div
              className={css.brandDropdown}
              onMouseLeave={() => setIsBrandOpen(false)}
            >
              <ul className={css.scroll}>
                {makes.map((make, index) => (
                  <li key={index}>
                    <p
                      onClick={() => {
                        setIsBrandOpen(false);
                        setBrand(make);
                      }}
                    >
                      {make}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </label>
      <label className={css.price}>
        Price/ 1 hour
        <div
          style={{ position: 'relative' }}
          onMouseEnter={() => setIsPriceOpen(true)}
          onMouseLeave={() => setIsPriceOpen(false)}
        >
          <input
            readOnly
            placeholder='To $'
            className={css.iconPadding}
            type='text'
            value={price}
          />
          <svg className={css.icon}>
            <use href={sprite + '#icon-chevron-down'}></use>
          </svg>
          {isPricedOpen && (
            <div
              className={css.brandDropdown}
              onMouseLeave={() => setIsPriceOpen(false)}
            >
              <ul className={css.scroll}>
                {prices.map((price, index) => (
                  <li key={index}>
                    <p
                      onClick={() => {
                        setIsPriceOpen(false);
                        setPrice(price);
                      }}
                    >
                      {price}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </label>
      <label className={css.mileage}>
        Car mileage / km
        <div className={css.mileageWrap}>
          <input
            value={mileageFrom}
            onChange={(e) => setMileageFrom(e.target.value)}
            placeholder='From'
            className={css.from}
            type='number'
          />
          <input
            value={mileageTo}
            onChange={(e) => setMileageTo(e.target.value)}
            placeholder='To'
            className={css.to}
            type='number'
          />
        </div>
      </label>
      <button onClick={handleSubmit} className={css.btn} type='button'>
        Search
      </button>
    </div>
  );
};

export default Filter;
