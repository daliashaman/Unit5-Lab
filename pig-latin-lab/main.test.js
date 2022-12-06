let main = require("./main");

//Lowercase
describe('lowercase function', () => {
  test('Hello will become hello', () => {
      let lowercase1 = main.lowercase("Hello");
      expect(lowercase1).toBe("hello");
  });

  test('TEST will become test', () => {
    let lowercase2 = main.lowercase("TEST");
    expect(lowercase2).toBe("test");
});
})

//Vowels
describe("translate function", () => {
  test("starts with the vowel a", () => {
    let vowel1 = main.translate("apple");
    expect(vowel1).toEqual("appleway");
  });
  
  test("starts with the vowel o - becomes orangeway", () => {
    let vowel2 = main.translate("orange");
    expect(vowel2).toEqual("orangeway");
  });

  test("starts with the vowel e - becomes elephantway", () => {
    let vowel3 = main.translate("elephant");
    expect(vowel3).toEqual("elephantway");
  });

  test("starts with the vowel i - becomes islandway", () => {
    let vowel4 = main.translate("island");
    expect(vowel4).toEqual("islandway");
  });
  test("starts with the vowel u - becomes umbrellaway", () => {
    let vowel5 = main.translate("umbrella");
    expect(vowel5).toEqual("umbrellaway");
  });

})

//Consonants
describe("consontant function", () => {
  test("starts with consontant gr - becomes ratefulgay", () => {
    let consonant1 = main.consonant("grateful")
    expect(consonant1).toBe("atefulgray");
  });

  test("starts with consontant str - becomes engthstray", () => {
    let consonant2 = main.consonant("strength")
    expect(consonant2).toBe("engthstray");
  });

  test("starts with consontant f - becomes ancyfay", () => {
    let consonant3 = main.consonant("FANCY")
    expect(consonant3).toBe("ancyfay");
  });

  test("starts with consontant b - becomes ananabay", () => {
    let consonant4 = main.consonant("banana")
    expect(consonant4).toBe("ananabay");
  });

});