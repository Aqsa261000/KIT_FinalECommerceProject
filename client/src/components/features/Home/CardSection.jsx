import React from 'react';
import './style.css'; // Import a CSS file for styling
import leftCard from '../../../assets/letfCard.svg';
import rightCard from '../../../assets/rightCard.svg';
import { Container } from '@mui/material';

const CardSection = () => {
  return (
    <Container>
      <div className="card-container">
        <div className="card">
          <div
            className="card-image"
            style={{ backgroundImage: `url(${leftCard})` }}
          >
            <h5>Low Price</h5>
            <h1>High Coziness</h1>
            <p> Upto 50% off</p>
          </div>
        </div>

        <div className="card">
          <div
            className="card-image"
            style={{ backgroundImage: `url(${rightCard})` }}
          >
            <h5>Low Price</h5>
            <h1>High Coziness</h1>
            <p> Upto 50% off</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CardSection;
