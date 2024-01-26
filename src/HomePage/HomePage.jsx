import {Link} from "react-router-dom";
import "./HomePage.css"

function HomePage(){

    return(
        <section className="homepage-section">
            <h1 className="homepage-h1">¿Cuanto sabes del universo Dark Souls?</h1>
            <p className="homepage-p">El juego consiste en un cuestionario de 10 preguntas con 4 opciones de respuesta, de las cuales solo habrá una correcta. ¡Cuanto menos tiempo tardes en acertar, más puntos conseguirás!</p>
            <div className="homepage-buttons-div">
                <Link to="Clasificaciones"><button className="homepage-btn">Clasificaciones</button></Link>
                <Link to="Cuestionario"><button className="homepage-btn">¡Comenzar!</button></Link>
            </div>
        </section>
    )

}

export {HomePage};