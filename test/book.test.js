const request = require("supertest");
const app = require("../src/app");
const { resetBooks } = require("../src/data/bookData"); // <- shared data

describe("Book API (in-memory)", () => {
  beforeEach(() => {
    resetBooks();
  });

  it("should return empty array initially", async () => {
    const res = await request(app).get("/books");
    expect(res.body).toEqual([]);
  });

  it("should add a book", async () => {
    const res = await request(app)
      .post("/books")
      .send({ title: "1984", author: "Orwell" });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("1984");
  });

  it("should return added books", async () => {
    await request(app).post("/books").send({ title: "1984", author: "Orwell" });
    const res = await request(app).get("/books");
    expect(res.body.length).toBe(1);
  });
});
