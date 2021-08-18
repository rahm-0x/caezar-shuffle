// Write your tests here!
const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  it("should properly encode message", () => {
    const input = "thinkful";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "jrufscpw";
    const actual = substitution(input, alphabet);
    expect(actual).to.eql(expected);
  });
  it("should properly decode message", () => {
    const input = "jrufscpw";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "thinkful";
    const actual = substitution(input, alphabet, false);
    expect(actual).to.eql(expected);
  });
//   it("should inlcude alphabet parameter when called, or return false", () => {
//     const input = "jrufscpw";
//     const actual = substitution(input, false);
//     expect(actual).to.be(false);
//   });
  it("should maintain spaces throughout when encoding", () => {
    const input = "You are an excellent spy";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution(input, alphabet);
    expect(actual).to.eql(expected);
  });
  it("should maintain special characters throughout when decoding", () => {
    const input = "y&ii$r&";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const expected = "message";
    const actual = substitution(input, alphabet, false);
    expect(actual).to.eql(expected);
  });
});