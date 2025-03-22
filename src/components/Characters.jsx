import React, { useState, useEffect } from "react";
import { rickAndMortyApi } from "../services/rickAndMortyApi";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    rickAndMortyApi.getCharacters()
      .then(data => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al cargar personajes:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="characters-container">
      <h2>Personajes</h2>
      {loading ? (
        <p>Cargando personajes...</p>
      ) : (
        <ul>
          {characters && characters.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Characters; 