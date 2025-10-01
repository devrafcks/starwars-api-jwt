import request from "supertest";
import app from "../src/app.js";

describe("Auth API", () => {
  it("deve registrar um usuário", async () => {
    const res = await request(app)
      .post("/auth/register")
      .send({ username: "luke", password: "force" });

    expect(res.statusCode).toBe(201);
  });

  it("deve logar e retornar token", async () => {
    const res = await request(app)
      .post("/auth/login")
      .send({ username: "luke", password: "force" });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });
});
