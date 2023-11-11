import React from 'react'
import css from './WelcomePage.module.css'
import clsx from 'clsx';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <section className={css.welcome}>
      <div className={clsx('container', css.wrapper)}>
        <h2 className={css.subtitle}>Welcome to</h2>
        <h1 className={css.title}>WroomTheCar</h1>
        <p className={css.description}>
          Welcome to our premier car rental website, where convenience meets
          quality in the world of transportation. Discover the freedom to
          explore at your own pace with our diverse fleet of meticulously
          maintained vehicles. Whether you're planning a weekend getaway or a
          business trip, our user-friendly platform ensures a seamless booking
          experience. Browse through a range of cars to suit your needs, from
          compact and fuel-efficient models to spacious SUVs for family
          adventures. Enjoy competitive rates, transparent pricing, and flexible
          rental options. With our easy online reservation system, your journey
          begins with just a few clicks. Trust us to provide not just a car, but
          a key to endless possibilities on the open road. Experience the joy of
          hassle-free travel – reserve your rental car today!
        </p>
        <Link to='/catalog'><Button variant='contained'>Let`s take a ride!</Button></Link>
      </div>
    </section>
  );
}

export default WelcomePage
