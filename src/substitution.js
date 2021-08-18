// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
  input = input.toLowerCase();
  if (!alphabet||alphabet.length != 26 ) {
    return false;
  }
  if (new Set(alphabet).size != 26) {
    return false;
  }

  //declaring our cipher
  let cipher = {
    "":"",
    a: alphabet[0],
    b: alphabet[1],
    c: alphabet[2],
    d: alphabet[3],
    e: alphabet[4],
    f: alphabet[5],
    g: alphabet[6],
    h: alphabet[7],
    i: alphabet[8],
    j: alphabet[9],
    k: alphabet[10],
    l: alphabet[11],
    m: alphabet[12],
    n: alphabet[13],
    o: alphabet[14],
    p: alphabet[15],
    q: alphabet[16],
    r: alphabet[17],
    s: alphabet[18],
    t: alphabet[19],
    u: alphabet[20],
    v: alphabet[21],
    w: alphabet[22],
    x: alphabet[23],
    y: alphabet[24],
    z: alphabet[25],
    " ": " ",
  };

    //switch keys and values if decoding
  if (!encode) {
    cipher = Object.keys(cipher).reduce((accum, key) =>
      Object.assign({}, accum, { [cipher[key]]: key })
    );
  }
  console.log(cipher)


  //iterating through the input, coding or decoding
  let codedMessage = "";
  for (let i = 0; i < input.length; i++) {
    if (encode && !Object.keys(cipher).includes(input[i])) {
      codedMessage += input[i];
    } else if (encode) {
      codedMessage += cipher[input[i]];
    }
    if (!encode && !Object.keys(cipher).includes(input[i])) {
      codedMessage += input[i];
    } else if (!encode) {
      codedMessage += cipher[input[i]];
    }
  }
  //return message
  return codedMessage;
}
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
