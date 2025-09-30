// Card.js
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ to, imgSrc, altText, title, description, tags }) => {
  return (
    <Link to={to} className="card">
      <img src={imgSrc} alt={altText} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </Link>
  );
};

export default Card;
