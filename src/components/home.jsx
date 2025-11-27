import React from "react";
import "./Home.css";

import lucky1 from "../images/lucky1.png";
import coin1 from "../images/coin1.png";
import bomb1 from "../images/bomb1.png";
import dice1 from "../images/dice1.png";
import slot1 from "../images/slot1.png";

const games = [
  { name: "Lucky Wheel", url: "https://lucky-wheel-react.netlify.app/", image: lucky1 },
  { name: "Coin Flip", url: "https://coin-filip.netlify.app/", image: coin1 },
  { name: "Avoid the Bomb", url: "https://avoid-the-bomb.netlify.app/", image: bomb1 },
  { name: "Dice Roll", url: "https://dice-rolli.netlify.app/", image: dice1 },
  { name: "Slot Machine", url: "https://slots-machines.netlify.app/", image: slot1 },
];


function Home() {
  return (
    <div className="home-container">
      <h1 className="hub-title">🎮 My Games Hub 🎮</h1>
      <div className="row g-4 justify-content-center">
        {games.map((game, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <a
              href={game.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="card game-card">
                <img 
                  src={game.image} 
                  alt={game.name} 
                  className="card-img-top"
                  style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
                />
                <div className="card-body text-center">
                  <h2 className="card-title">{game.name}</h2>
                  <p className="card-text">Click to Play!</p>
                </div>
              </div>
            </a>
          </div>
        ))}
        <h2 style={{ textAlign: "center", color: "white", marginTop: "40px" }}>
        More Games Will be added soon......
      </h2>
      </div>
    </div>
  );
}

export default Home;
