import { Link } from "react-router-dom";
import preguntas from "../preguntas/preguntas";
import { useState, useEffect } from "react";
import "./Cuestionario.css";
import usePuntuacion from "../hooks/usePuntuacion"; 

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function Cuestionario() {
  const [preguntasAleatorias, setPreguntasAleatorias] = useState([]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [remainingTime, setRemainingTime] = useState(30);
  const [areDisabled, setAreDisabled] = useState(false);
  const [puntuacionTemporal, setPuntuacionTemporal] = useState(0); 

  // Utiliza el hook usePuntuacion
  const [puntuacion, actualizarPuntuacion] = usePuntuacion();

  useEffect(() => {
    const preguntasMezcladas = shuffleArray(preguntas).slice(0, 10);
    setPreguntasAleatorias(preguntasMezcladas);
  }, []);

  function handleAnswerSubmit(isCorrect, e) {
    if (isCorrect === true) {
      setPuntuacionTemporal(remainingTime + puntuacionTemporal);
    }

    e.target.classList.add(isCorrect ? "correct" : "incorrect");

    setTimeout(() => {
      if (preguntaActual === preguntasAleatorias.length - 1) {
        actualizarPuntuacion(puntuacionTemporal); 
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
        setRemainingTime(30);
      }
    }, 1000);
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (remainingTime > 0) setRemainingTime(remainingTime - 1);
      if (remainingTime === 0) setAreDisabled(true);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [remainingTime]);

  return (
    <main className="cuestionario-main">
      {isFinished ? (
        <section className="cuestionario-section">
          <h2 className="cuestionario-finish-h2">¡Has terminado el juego!</h2>
          <h3 className="cuestionario-finish-score">
            Tu puntuación final es de: {puntuacionTemporal}
          </h3>
          <Link to="/">
            <button className="homepage-btn">Volver al inicio</button>
          </Link>
        </section>
      ) : (
        <section className="cuestionario-section">
          <div className="cuestionario-cabecera-div">
            <h3 className="cuestionario-h3">
              Pregunta {preguntaActual + 1} de {preguntasAleatorias.length}
            </h3>
            <h2 className="cuestionario-titulo-pregunta">
              {preguntasAleatorias.length > 0 && preguntasAleatorias[preguntaActual].titulo}
            </h2>
          </div>
          <div className="respuestas-div">
            {preguntasAleatorias.length > 0 && preguntasAleatorias[preguntaActual].opciones.map((respuesta) => {
              return (
                <button
                  disabled={areDisabled}
                  key={respuesta.textoRespuesta}
                  className="respuestas-btn"
                  onClick={(e) =>
                    handleAnswerSubmit(respuesta.isCorrect, e)
                  }
                >
                  {respuesta.textoRespuesta}
                </button>
              );
            })}
          </div>
          <div className="puntuacion-homepagebtn-div">
            {!areDisabled ? (
              <p className="tiempo-restante-p">
                Tiempo restante: {remainingTime}
              </p>
            ) : (
              <button
                className="continuar-btn"
                onClick={() => {
                  setRemainingTime(30);
                  setAreDisabled(false);
                  setPreguntaActual(preguntaActual + 1);
                }}
              >
                Continuar
              </button>
            )}
            <p className="puntuacion-p">Puntuación: {puntuacionTemporal}</p>
            <Link to="/">
              <button className="homepage-btn">Volver al inicio</button>
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}

export { Cuestionario };