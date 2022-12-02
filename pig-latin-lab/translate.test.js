let translate = require("./translate");

describe("translate function", () => {
  test("words that start with the vowel a", () => {
    let result = translate("apple");
    expect(result).toBe("appleway");
  });
})