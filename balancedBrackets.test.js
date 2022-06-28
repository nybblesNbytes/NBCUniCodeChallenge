const { isBalanced } = require("./balancedBrackets.js");

describe("isBalanced", () => {
  test("it returns true for simple balanced brackets", () => {
    expect(isBalanced("()")).toEqual(true);
  });

  test("it returns true for multiple balanced brackets", () => {
    expect(isBalanced("()[]{}<>")).toEqual(true);
  });

  test("it returns true for nested balanced brackets", () => {
    expect(isBalanced("([{<>}])")).toEqual(true);
  });

  test("it returns true for complex balanced strings", () => {
    expect(isBalanced("([])[{}]{(())}")).toEqual(true);
  });

  test("it returns true for strings containing balanced brackets and non-bracket characters", () => {
    expect(isBalanced("([a]b)")).toEqual(true);
  });

  test("it returns false for simple unbalanced brackets", () => {
    expect(isBalanced("(")).toEqual(false);
  });

  test("it returns false for complex unbalanced brackets", () => {
    expect(isBalanced("([])[{}]{(([))}")).toEqual(false);
  });

  test("it returns false for balanced brackets containing unbalanced brackets", () => {
    expect(isBalanced("({)")).toEqual(false);
  });

  test("it returns false for balanced but overlapping brackets", () => {
    expect(isBalanced("([)]")).toEqual(false);
  });

  test("it returns false for matched but unbalanced brackets", () => {
    expect(isBalanced("([])[{}]{([)]}")).toEqual(false);
  });

  test("it returns false for extra closing brackets", () => {
    expect(isBalanced("()]")).toEqual(false);
  });

  // Tests after this point were added to cover additional scenarios.

  test("it returns false empty input string", () => {
    expect(isBalanced("")).toEqual(false);
  });

  test("it returns false no brackets at all", () => {
    expect(isBalanced("this should not find anything.")).toEqual(false);
  });

  test("it returns false leading ending bracket", () => {
    expect(isBalanced("]()")).toEqual(false);
  });

  test("it returns true ugly nested but balanced", () => {
    expect(isBalanced("[(({boo})<(<yikes>[]){}>)]")).toEqual(true);
  });

  test("it returns false ugly nested and unbalanced", () => {
    expect(isBalanced("[(({boo})<(<yikes>[]){}>)]]")).toEqual(false);
  });

  test("it returns false unbalanced beginning bracket", () => {
    expect(isBalanced("([]")).toEqual(false);
  });

  test("it returns false only beginning brackets", () => {
    expect(isBalanced("([{<")).toEqual(false);
  });
});
