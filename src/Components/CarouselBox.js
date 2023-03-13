import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import DmountainImg from "../assets/dmountain.jpg";
import GmountainImg from "../assets/gmountain.jpg";

export default function CarouselBox() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block width-100" src={DmountainImg} alt="Forest" />
        <Carousel.Caption>
          <h3>Mountain image</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            soluta cupiditate impedit recusandae .
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block width-100" src={GmountainImg} alt="Forest" />
        <Carousel.Caption>
          <h3>Green Mountain image</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            soluta cupiditate impedit recusandae .
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block width-100" src={DmountainImg} alt="Forest" />
        <Carousel.Caption>
          <h3>Mountain image</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            soluta cupiditate impedit recusandae .
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
