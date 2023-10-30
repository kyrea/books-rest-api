const request = require("supertest");
const app = require("../app.js");

describe("API Endpoints", () => {
  it("should create a new book", (done) => {
    request(app)
      .post("/api/books")
      .send({
        title: "Test Book",
        author: "Test Author",
        summary: "This is a test book.",
      })
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it("should list all books", (done) => {
    request(app)
      .get("/api/books")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it("should get details of a specific book", (done) => {
    // Replace 'BOOK_ID' with a valid book ID
    request(app)
      .get("/api/books/1")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it("should update a book", (done) => {
    // Replace 'BOOK_ID' with a valid book ID
    request(app)
      .put("/api/books/1")
      .send({ title: "Updated Book" })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it("should delete a book", (done) => {
    // Replace 'BOOK_ID' with a valid book ID
    request(app)
      .delete("/api/books/1")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
