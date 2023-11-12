import React from 'react'
import CardList from '../../components/CardList/CardList'
import Filter from '../../components/Filter/Filter'

const CatalogPage = () => {
  return (
    <div className='container'>
      <Filter/>
      <CardList/>
    </div>
  )
}

export default CatalogPage
