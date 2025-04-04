const BASE_URL = "https://rickandmortyapi.com/api";

export const rickAndMortyApi = {
  getCharacters: async (page = 1) => {
    try {
      const response = await fetch(`${BASE_URL}/character?page=${page}`);
      return await response.json();
    } catch (error) {
      console.error("Error al obtener personajes:", error);
      throw error;
    }
  },
  getEpisodes: async () => {
    try {
      const response = await fetch(`${BASE_URL}/episode`);
      return await response.json();
    } catch (error) {
      console.error("Error al obtener episodios:", error);
      throw error;
    }
  },
  getLocation: async () => {
    try {
      const response = await fetch(`${BASE_URL}/location`);
      return await response.json();
    } catch (error) {
      console.error("Error al obtener ubicacion", error);
      throw error;
    }
} }
