import React, { useEffect } from "react";
import { Container, List, Item, Blur, ImageWrapper, Image, DateSpan, Heading, ImageSingle } from "./styled";
import Adidas from '/img/brends/adidas.png'
import Nike from '/img/brends/nike.png'
import Converse from '/img/brends/converse.png'

const Section = () => {
  useEffect(() => {
    const listItems = document.querySelectorAll(".item");

    listItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const figure = item.querySelector(".image");
        figure.classList.toggle("animate-in");
        figure.classList.remove("animate-out");
      });

      item.addEventListener("mouseleave", () => {
        const figure = item.querySelector(".image");
        figure.classList.add("animate-out");
        figure.classList.remove("animate-in");
      });
    });
  }, []);

  return (
      <div style={{padding:"4rem 0rem 6rem 0rem"}}>
      <Container>
        <List>
          <Item className="item">
            <Blur>
              <DateSpan>24.05.2024</DateSpan>
              <Heading>Adidas</Heading>
            </Blur>
            <ImageWrapper>
              <Image className="image">
                <ImageSingle src={Adidas} alt="INT" />
              </Image>
            </ImageWrapper>
          </Item>

          <Item className="item">
            <Blur>
              <DateSpan>24.05.2024</DateSpan>
              <Heading>Nike</Heading>
            </Blur>
            <ImageWrapper>
              <Image className="image">
                <ImageSingle src={Nike} alt="FBA" />
              </Image>
            </ImageWrapper>
          </Item>

          <Item className="item">
            <Blur>
              <DateSpan>24.05.2024</DateSpan>
              <Heading>Converse</Heading>
            </Blur>
            <ImageWrapper>
              <Image className="image">
                <ImageSingle src={Converse} alt="ASC" />
              </Image>
            </ImageWrapper>
          </Item>
        </List>
      </Container>
    </div>
  );
};

export default Section;
