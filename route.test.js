test("should return hello world", () => {
  fetch("http://localhost:9000/hello")
    .then((data) => data.text())
    .then((data) => {
      expect(data).toBe("Hello world!");
    });
});

test("should return sum", () => {
  fetch("http://localhost:9000/sum", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      a: 1,
      b: 90,
    }),
  })
    .then((data) => data.text())
    .then((res) => {
      expect(res).toBe("91");
    });
});
