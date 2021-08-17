// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius");


describe("polybius", () => {
  it("should encode each letter to corresponding number pair", () =>{
    const input = "bugs bunny";
    const encode = true;
    const actual = polybius(input, encode);
    const expected = "21542234 2154333345";
    expect(actual).to.eql(expected);
  })
  it("should output a string", () =>{
    const input = "bugs bunny";
    const encode = true;
    const actual = polybius(input, encode);
    const expected = "21542234 2154333345";
    expect(actual).to.eql(expected);
  })
  it("should decode accurately", () =>{
    const input = "21542234 2154333345";
    const encode = false;
    const actual = polybius(input, encode);
    const expected = "bugs bunny";
    expect(actual).to.eql(expected);
  })
  it("should ignore caps", () =>{
    const input = "BUGS BUNNY";
    const encode = true;
    const actual = polybius(input, encode);
    const expected = "21542234 2154333345";
    expect(actual).to.eql(expected);
  })
})

