import { Link } from "react-router-dom";

function Clasificaciones(){

    return(
        <section>
            <h3>Esta es la tabla de clasificaciones</h3>
            <Link to="/"><button>Volver al inicio</button></Link>
        </section>
        )

}

export {Clasificaciones};