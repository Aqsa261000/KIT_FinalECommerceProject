import React, { useState } from 'react';
import { DefaultLayout } from '../../layout';

import HeroSection from './HeroSection';
import CardSection from './CardSection';
import shoes2 from '../../../assets/shoes2.jpg';
import shoes1 from '../../../assets/shoes1.svg';
import knitted from '../../../assets/knitted.svg';
import puma from '../../../assets/image 21.svg';
import hm from '../../../assets/image 7.svg';
import brand3 from '../../../assets/image 19.svg';
import brand4 from '../../../assets/image 18.svg';

import { Container } from '@mui/material';
import { Button } from '@mui/base';
const HomeDefault = () => {
  const [arrival, setArrival] = useState([
    {
      id: 1,
      image: knitted,
      title: 'Knitted Joggers',
    },
    {
      id: 2,
      image: knitted,
      title: 'Knitted Joggers',
    },
    {
      id: 3,
      image: knitted,
      title: 'Knitted Joggers',
    },
    {
      id: 4,
      image: shoes1,
      title: 'Knitted Joggers',
    },
  ]);

  const brands = [
    {
      id: 1,
      title: 'Puma',
      image: puma,
    },
    {
      id: 2,
      title: 'Puma',
      image: hm,
    },
    {
      id: 3,
      title: 'Puma',
      image: brand3,
    },
    {
      id: 4,
      title: 'Puma',
      image: brand4,
    },
  ];
  return (
    <>
      <DefaultLayout>
        <HeroSection />
        <CardSection />

        <div className="prod-container">
          <div className="heading-div">
            <div className="color"></div>
            <div>
              <h2 style={{ color: '#3C4242' }}>New Arrival</h2>
            </div>
          </div>

          <div className="arrival">
            {arrival.map((item, index) => {
              return (
                <div className="itemArrival" key={item.id}>
                  <img src={item.image} alt="shoes" className="prod-card-img" />
                  <h2>{item.title}</h2>
                </div>
              );
            })}
          </div>
          <div className="center">
            <Button variant="contained" className="shop-btn">
              Shop Now
            </Button>
          </div>
        </div>

        <div>
          <div className="heading-div">
            <div className="color"></div>
            <div>
              <h2 style={{ color: '#3C4242' }}>Popular</h2>
            </div>
          </div>

          <div className="arrival">
            {arrival.map((item, index) => {
              return (
                <div className="itemArrival" key={item.id}>
                  <img src={item.image} alt="shoes" className="prod-card-img" />
                  <h5>{item.title}</h5>
                </div>
              );
            })}
          </div>
          <div className="center">
            <Button variant="contained" className="shop-btn">
              Shop Now
            </Button>
          </div>
        </div>

        <div>
          <div className="heading-div">
            <div className="color"></div>
            <div>
              <h2 style={{ color: '#3C4242' }}>Men</h2>
            </div>
          </div>

          <div className="arrival">
            {arrival.map((item, index) => {
              return (
                <div className="itemArrival" key={item.id}>
                  <img src={item.image} alt="shoes" className="prod-card-img" />
                  <h5>{item.title}</h5>
                </div>
              );
            })}
          </div>
          <div className="center">
            <Button variant="contained" className="shop-btn">
              Shop Now
            </Button>
          </div>
        </div>

        <div className="heading-div">
          <div className="color"></div>
          <div>
            <h2 style={{ color: '#3C4242' }}>Women</h2>
          </div>
        </div>
        <div className="arrival">
          {arrival.map((item, index) => {
            return (
              <div className="itemArrival" key={item.id}>
                <img src={item.image} alt="shoes" className="prod-card-img" />
                <h5>{item.title}</h5>
              </div>
            );
          })}
        </div>
        <div className="center">
          <Button variant="contained" className="shop-btn">
            Shop Now
          </Button>
        </div>

        <div className="brand-container center">
          <div className="content">
            <h1 style={{ color: '#fff' }}>Top Brands Deal</h1>
            <h6 style={{ color: '#fff' }}>
              Upto <span style={{ color: '#FBD103' }}>60%</span> off
            </h6>

            <div className="arrival">
              {brands.map((item, index) => {
                return (
                  <div className="itemBrand" key={item.id}>
                    <img
                      src={item.image}
                      alt="shoes"
                      className="brand-card-img"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default HomeDefault;
