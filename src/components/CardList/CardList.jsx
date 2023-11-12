import React from 'react';
import Card from '../Card/Card';
import css from './CardList.module.css';

const CardList = ({ adverts, favorites = false, handleLoadMore }) => {
  return adverts && adverts.length > 0 ? (
    <>
      <div className={css.wrapper}>
        {adverts.map((advert, index) => (
          <Card advert={advert} key={index} />
        ))}
      </div>
      <button className={css.loadMore} onClick={handleLoadMore} type='button'>
        Load more
      </button>
    </>
  ) : !favorites ? (
    <p className={css.info}>
      There are no cars here for you yet. Please change filte cryteria and we
      find something for you!
    </p>
  ) : (
    <p className={css.info}>
      There are no favorites cars here yet. Go to Catalog and choose some!
    </p>
  );
};

export default CardList;
