const search = require(".");

describe("filterAndMapIds", () => {
  test("returns IDs of documents containing the query string", () => {
    const docs = [
      { id: 1, text: "hello world" },
      { id: 2, text: "goodbye world" },
      { id: 3, text: "hello again" },
    ];
    const query = "hello";

    const result = search(docs, query);

    expect(result).toEqual([1, 3]);
  });

  test("returns an empty array if no documents match the query", () => {
    const docs = [
      { id: 1, text: "hello world" },
      { id: 2, text: "goodbye world" },
    ];
    const query = "missing";

    const result = search(docs, query);

    expect(result).toEqual([]);
  });

  test("returns an empty array if docs array is empty", () => {
    const docs = [];
    const query = "hello";

    const result = search(docs, query);

    expect(result).toEqual([]);
  });

  test("is case-sensitive when matching query", () => {
    const docs = [
      { id: 1, text: "Hello world" },
      { id: 2, text: "goodbye World" },
    ];
    const query = "hello";

    const result = search(docs, query);

    expect(result).toEqual([]);
  });

  test("handles special characters in query string", () => {
    const docs = [
      { id: 1, text: "hello world!" },
      { id: 2, text: "goodbye world?" },
    ];
    const query = "!";

    const result = search(docs, query);

    expect(result).toEqual([1]);
  });

  test("works with numeric IDs", () => {
    const docs = [
      { id: 101, text: "search this" },
      { id: 102, text: "another test" },
    ];
    const query = "test";

    const result = search(docs, query);

    expect(result).toEqual([102]);
  });
});
