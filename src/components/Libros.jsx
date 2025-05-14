
import React from "react";
// import { datalibros } from "../mocks/datalibros.json";
import Slider from "react-slick";
import "../styles/Libros.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


/* export function Libros({ datalibros }) {
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
} */

export function Libros({ datalibros, searchTerm }) {
  // Filtrar los libros según el término de búsqueda
  const filteredLibros = datalibros.filter((libro) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      libro.tittle.toLowerCase().includes(lowerSearchTerm) ||
      libro.author.toLowerCase().includes(lowerSearchTerm) ||
      libro.description?.toLowerCase().includes(lowerSearchTerm) // Si hay una descripción
    );
  });

  return (
    <div className="LibrosCard">
      {filteredLibros.map((libro, index) => (
        <div className="LibrosCard-item" key={index}>
          <img src={libro.picture} alt={libro.tittle} />
          <h3>{libro.tittle}</h3>
          <p>{libro.author}</p>
          <p>${libro.price}</p>
        </div>
      ))}
    </div>
  );
}