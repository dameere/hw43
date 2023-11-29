import React from "react";
import "./App.css";
import wednesday_img from "./img/wednesday.jpg";
import sman_img from "./img/sman.webp";
import Card from "./components/Card";

function App() {
  const cards = [
    {
      id: 1,
      img: wednesday_img,
      movieName: "Уэнздей",
      description: "2022 г. | Ужасы",
    },
    {
      id: 2,
      img: sman_img,
      movieName: "Человек-паук: паутина вселенных",
      description: "2023 г. | Мультфильм, фантастика",
    },
  ];

  return (
    <div className="App">
      {cards.map((card) => (
        <Card
          img={card.img}
          movieName={card.movieName}
          description={card.description}
					key={card.id}
        />
      ))}
    </div>
  );
}

export default App;
