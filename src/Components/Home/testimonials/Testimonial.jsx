import React from 'react';
import { CardTest, Name, Testimonial } from './styled';
import { FaStar1, FaStarHalfAlt1 } from '../new-arrivals/styled';
import { RiVerifiedBadgeFill } from 'react-icons/ri';

function TestimonialUser({ item }) {
  const { rate, name, comment } = item;

  const renderStars = (rate) => {
    const stars = [];
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar1 key={i} />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt1 key="half" />);
    }

    return stars;
  };

  return (
    <div style={{ marginLeft: "40px" }}>
      <div className="rate">{renderStars(rate)}</div>
      <Name>
        {name} <RiVerifiedBadgeFill style={{ color: "green", marginLeft: "5px" }} />
      </Name>
      <Testimonial>"{comment}"</Testimonial>
    </div>
  );
}

export default TestimonialUser;
