import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Libros.css";

export function Libros({ datalibros }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <Slider {...settings}>
      {datalibros.map((libro, index) => (
        <div className="carousel-item" key={index}>
          <img src={libro.imagen} alt={libro.titulo} />
          <h3>{libro.titulo}</h3>
          <p>{libro.autor}</p>
          <p>${libro.precio}</p>
        </div>
      ))}
    </Slider>
  );
}
