import { Routes, Route} from "react-router-dom"
import './App.css'
import { HomePage } from './HomePage/HomePage'
import { Clasificaciones } from "./Clasificaciones/Clasificaciones"
import { Cuestionario } from "./Cuestionario/Cuestionario"

function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Clasificaciones" element={<Clasificaciones />} />
        <Route path="Cuestionario" element={<Cuestionario />} />
      </Routes>
    </div>
  )
}

export default App
