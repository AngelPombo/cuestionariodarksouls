import { Link } from "react-router-dom";
import "./Clasificaciones.css"

function Clasificaciones(){

    return(
        <section className="clasificaciones-main-section">
            <h3 className="clasificaciones-h3">Funcionalidad en desarrollo</h3>
            <Link to="/"><button className="clasificaciones-btn">Volver al inicio</button></Link>
        </section>
        )

}

export {Clasificaciones};