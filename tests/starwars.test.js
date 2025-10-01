import request from "supertest";
import app from "../src/app.js";
import jwt from "jsonwebtoken";

const token = jwt.sign({ id: 1, username: "luke" }, "secretkey");

describe("Star Wars API", () => {
  it("deve retornar personagem com token válido", async () => {
    const res = await request(app)
      .get("/starwars/character/1")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.character).toHaveProperty("name");
  });

  it("deve negar acesso sem token", async () => {
    const res = await request(app).get("/starwars/character/1");
    expect(res.statusCode).toBe(401);
  });
});
