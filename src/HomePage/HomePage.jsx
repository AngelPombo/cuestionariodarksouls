import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./HomePage.css";
import logo from "../images/videogames.png"

function HomePage() {
  const [puntuacion, setPuntuacion] = useState(0);

  useEffect(() => {
    const storedScore = localStorage.getItem("puntuacion");
    if (storedScore) {
      setPuntuacion(Number(storedScore));
    }
  }, []);

  return (
    <section className="homepage-section">
      <header className="header">
        <h1 className="homepage-h1">VideoGamesQuiz</h1>
        <img className="homepage-logo" src={logo} alt="videogames-logo" />
      </header>  
      <div className="homepage-p-div">
        <p className="homepage-p1">Pon a prueba tus conocimientos sobre la industria del videojuego en este quiz de 10 preguntas con 4 opciones de respuesta.</p>
        <p className="homepage-p2">¡Cuanto menos tiempo tardes en acertar cada pregunta más puntos conseguirás!</p>
      </div>
      <p className="homepage-score-p">Puntuación más alta: <span className="hiscore-span">{puntuacion}</span></p>
      <div className="homepage-buttons-div">
        <Link to="Cuestionario"><button className="homepage-btn">¡Comenzar!</button></Link>
      </div>
    </section>
  );
}

export { HomePage };