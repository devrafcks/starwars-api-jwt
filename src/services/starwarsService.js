import fetch from "node-fetch";

export const fetchCharacter = async (id) => {
  const response = await fetch(`https://swapi.dev/api/people/${id}/`);
  if (!response.ok) throw new Error("Erro ao buscar personagem de Star Wars");
  return response.json();
};
