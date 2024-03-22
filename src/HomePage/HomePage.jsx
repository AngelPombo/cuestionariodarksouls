import {Link} from "react-router-dom";
import "./HomePage.css"

function HomePage(){

    return(
        <section className="homepage-section">
            <h1 className="homepage-h1">VideoGamesQuiz</h1>
            <div className="homepage-p-div">
                <p className="homepage-p1">Pon a prueba tus conocimientos sobre la industria del videojuego en este quiz de 10 preguntas con 4 opciones de respuesta.</p>
                <p className="homepage-p2">¡Cuanto menos tiempo tardes en acertar cada pregunta más puntos conseguirás!</p>
            </div>
            <div className="homepage-buttons-div">
                <Link to="Cuestionario"><button className="homepage-btn">¡Comenzar!</button></Link>
            </div>
        </section>
    )

}

export {HomePage};