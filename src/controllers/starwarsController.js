import { fetchCharacter } from "../services/starwarsService.js";

export const getCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fetchCharacter(id);
    res.json({ user: req.user, character: data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
