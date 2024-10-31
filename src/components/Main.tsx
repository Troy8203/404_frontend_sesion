import { useEffect, useState } from "react";
import axios from "axios"; // Importa Axios

interface Texto {
  id: number;
  titulo: string;
  autor: string;
  descripcion: string;
  contenido: string;
  region: string;
  categoria: string;
  imagen_url: string;
}

export const Main = () => {
  const [texto, setTexto] = useState<Texto[]>([]);

  useEffect(() => {
    const getTexto = async () => {
      try {
        const response = await axios.get("http://localhost:8000/textos"); // Cambia a localhost
        console.log("Texto:", response.data);
        setTexto(response.data);
      } catch (error) {
        console.error("Error fetching texto:", error);
      }
    };

    getTexto();
  }, []);

  return (
    <div>
      <h1>Textos</h1>
      <ul>
        {texto.map((item) => (
          <li key={item.id}>
            <h2>{item.titulo}</h2>
            <p>Autor: {item.autor}</p>
            <p>{item.descripcion}</p>
            <img
              src={item.imagen_url}
              alt={item.imagen_url}
              className="w-40 h-auto"
            />
            <p>URL: {item.imagen_url}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
