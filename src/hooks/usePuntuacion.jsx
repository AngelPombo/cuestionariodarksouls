import { useState, useEffect } from "react";

function usePuntuacion() {
  const [puntuacion, setPuntuacion] = useState(0);

  useEffect(() => {
    const storedScore = localStorage.getItem("puntuacion");
    if (storedScore) {
      setPuntuacion(Number(storedScore));
    }
  }, []);

  const actualizarPuntuacion = (nuevaPuntuacion) => {
    const storedScore = Number(localStorage.getItem("puntuacion"));
    if (nuevaPuntuacion > storedScore) {
      setPuntuacion(nuevaPuntuacion);
      localStorage.setItem("puntuacion", nuevaPuntuacion);
    } else {
      setPuntuacion(nuevaPuntuacion);
    }
  };

  return [puntuacion, actualizarPuntuacion];
}

export default usePuntuacion;