const translate = (word) => {
    let hasVowels = false;
    for (const letter of word) {
      if (
        letter === "a" ||
        letter === "e" ||
        letter === "i" ||
        letter === "o" ||
        letter === "u"
      ) {
        hasVowels = true;
        break;
      }
    }
    if (
      word[0] === "a" ||
      word[0] === "e" ||
      word[0] === "i" ||
      word[0] === "o" ||
      word[0] === "u"
    ) {
      return word + "way";
    } else if (!hasVowels) {
      return word + "ay";
    }
  };
  
  module.exports = translate;