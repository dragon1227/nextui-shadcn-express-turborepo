import supertest from "supertest";
import { createServer } from "../server";
import jwt from "jsonwebtoken";
import { jwtSecret } from "@/config/const";

describe("server", () => {
  it("health check returns 200", async () => {
    await supertest(createServer())
      .get("/healthz")
      .expect(200)
      .then((res) => {
        expect(res.body.ok).toBe(true);
      });
  });

  it("message endpoint says hello", async () => {
    await supertest(createServer())
      .get("/message/jared")
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ message: "hello jared" });
      });
  });

  it("get profile via token", async () => {
    await supertest(createServer())
      .get("/api/v1/auth/profile")
      .auth(
        jwt.sign(
          { name: "John Doe", image: "1.png", email: "jdoe@example.com" },
          jwtSecret,
        ),
        { type: "bearer" },
      )
      .expect(200)
      .then((res) => {
        expect(res.body).toContain({
          name: "John Doe",
          image: "1.png",
          email: "jdoe@example.com",
        });
      });
  });
});
