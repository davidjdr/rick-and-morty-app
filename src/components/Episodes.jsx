import React, { useState, useEffect } from "react";
import { rickAndMortyApi } from "../services/rickAndMortyApi";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    rickAndMortyApi.getEpisodes()
      .then(data => {
        setEpisodes(data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al cargar episodios:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="episodes-container">
      <h2>Episodios</h2>
      {loading ? (
        <p>Cargando episodios...</p>
      ) : (
        <ul>
          {episodes && episodes.map((episode) => (
            <li key={episode.id}>{episode.name} - {episode.episode}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Episodes; 