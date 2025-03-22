import React, { useState, useEffect } from "react";
import { rickAndMortyApi } from "../services/rickAndMortyApi";

const Location = () => {
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    rickAndMortyApi.getLocation()
      .then(data => {
        setLocation(data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al cargar ubicacion", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="location-container">
      <h2>Ubicaciones</h2>
      {loading ? (
        <p>Cargando Ubicaciones...</p>
      ) : (
        <ul>
          {location && location.map((location) => (
            <li key={location.id}>{location.name} - {location.location}</li>
          ))}
        </ul>
      )}
    </div>
  );git 
};

export default Location; 