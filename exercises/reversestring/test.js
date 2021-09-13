const reverse = require("./index");
const reverseLoop = require("./index");

test("Reverse function exists", () => {
  expect(reverse).toBeDefined();
});

test("Reverse reverses a string", () => {
  expect(reverse("abcd")).toEqual("dcba");
});

test("Reverse reverses a string", () => {
  expect(reverse("  abcd")).toEqual("dcba  ");
});

//reverseLoop tests
// test("ReverseLoop function exists", () => {
//   expect(reverseLoop).toBeDefined();
// });

// test("ReverseLoop reverses a string", () => {
//   expect(reverseLoop("abcd")).toEqual("dcba");
// });

// test("ReverseLoop reverses a string", () => {
//   expect(reverseLoop("  abcd")).toEqual("dcba  ");
// });
