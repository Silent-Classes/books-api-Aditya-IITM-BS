const request = require("supertest");
const app = require("../../src/app");

describe("🔒 Private Book API Tests", () => {
  beforeEach(() => {
    jest.resetModules(); // reset in-memory books array
  });

  it("should return 400 if title is missing", async () => {
    const res = await request(app).post("/books").send({ author: "NoTitle" });
    expect(res.statusCode).toBe(400);
  });

  it("should return 400 if author is missing", async () => {
    const res = await request(app).post("/books").send({ title: "No Author" });
    expect(res.statusCode).toBe(400);
  });

  it("should return books in insertion order", async () => {
    await request(app).post("/books").send({ title: "Book A", author: "A" });
    await request(app).post("/books").send({ title: "Book B", author: "B" });

    const res = await request(app).get("/books");
    expect(res.body[0].title).toBe("Book A");
    expect(res.body[1].title).toBe("Book B");
  });

  it("should increment ID for each book", async () => {
    const res1 = await request(app)
      .post("/books")
      .send({ title: "B1", author: "A1" });
    const res2 = await request(app)
      .post("/books")
      .send({ title: "B2", author: "A2" });

    expect(res1.body.id).toBeLessThan(res2.body.id);
  });
});
