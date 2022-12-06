
//Convert each word to lowercase before translating
function lowercase (string) {
  return string.toLowerCase();
};

//if word starts with vowel, add "way" at the end
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
  };
}

  //if word starts with consonant, move all consonants to the end and add "ay"
  function consonant (string) {
    let vowels = "aeiou".split("");
    string = string.toLowerCase();

    if (vowels.includes(string[0])) {
        return string + "way";
    } else {
        let consonants = ""
        for(let i = 0; i < string.length; i++) {
            if (vowels.includes(string[i])) {
                break;
            }
            consonants += string[i]
        } return string.substring(consonants.length) + consonants + "ay"
    } 
};

module.exports = {translate, lowercase, consonant};