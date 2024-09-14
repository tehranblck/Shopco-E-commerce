import TestimonialUser from './Testimonial'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { H2 } from '../new-arrivals/styled';

function Testimonials() {
    const testimonials=[
   
        {
          "id": 2,
          "name": "Jane Smith",
          "comment": "Quality is excellent and it matches the description. Will definitely buy again.",
          "rate": 5.0
        },
        {
          "id": 3,
          "name": "Michael Johnson",
          "comment": "The product is good but not as durable as I hoped. It's functional though.",
          "rate": 3.0
        },
        {
          "id": 4,
          "name": "Emily Davis",
          "comment": "Amazing value for money! The design is sleek and modern. Highly recommended.",
          "rate": 4.5
        },
        {
          "id": 5,
          "name": "Chris Brown",
          "comment": "Product arrived with a small defect. Customer service was helpful and resolved it quickly.",
          "rate": 3.5
        },
        {
          "id": 6,
          "name": "Patricia Wilson",
          "comment": "The item exceeded my expectations. It works perfectly and looks even better in person.",
          "rate": 5.0
        },
        {
          "id": 7,
          "name": "David Martinez",
          "comment": "The product is okay, but I found it difficult to set up. Instructions could be clearer.",
          "rate": 3.0
        },
        {
          "id": 8,
          "name": "Sarah Taylor",
          "comment": "Very stylish and functional. Perfect for my needs. Would definitely recommend it to others.",
          "rate": 4.5
        },
        {
          "id": 9,
          "name": "James Anderson",
          "comment": "Not bad, but I've seen better quality for the price. It's decent for occasional use.",
          "rate": 3.5
        },
        {
          "id": 10,
          "name": "Laura Thomas",
          "comment": "This product is fantastic! Exceeds my expectations in terms of performance and durability.",
          "rate": 5.0
        },
        {
          "id": 11,
          "name": "Robert White",
          "comment": "Product is decent but the color didn't match what I saw online. Otherwise, it's fine.",
          "rate": 3.0
        },
        {
          "id": 12,
          "name": "Linda Harris",
          "comment": "Absolutely love this product! It looks great and performs even better. Worth every penny.",
          "rate": 4.5
        }
      ]
      const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
          speed: 500,
          autoplay: true,
          autoplaySpeed:3000
      };
    return (
       
        <div style={{ overflow: "hidden",padding:"2rem 6rem 10rem 6rem" }}>
            <H2 style={{textAlign:"left"}}>Testimonials</H2>
          <Slider {...settings}>
              {
                  testimonials.map((item, index) => (
                      <TestimonialUser key={index} item={item} />
                  ))
              }
          </Slider>
    </div>
  )
}

export default Testimonials