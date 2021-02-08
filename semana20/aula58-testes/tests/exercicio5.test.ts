import {
  NACIONALITY,
  LOCATION,
  User,
  Casino,
} from "../src/exercicio3/entities";
import { verifyAge } from "../src/exercicio3/exercicio3";

test("1 brazilian allowed", () => {
  const brazilian: User = {
    name: "Amora",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const casino: Casino = {
    name: "Lambasaia",
    location: LOCATION.BRAZIL,
  };

  const result = verifyAge(casino, [brazilian]);
  expect(result.brazilians.allowed.length).toBeGreaterThan(0);
  expect(result.brazilians.allowed.length).toBeLessThan(2);
});

test("1 american allowed", () => {
  const brazilian: User = {
    name: "Lola",
    age: 19,
    nacionality: NACIONALITY.AMERICAN,
  };

  const casino: Casino = {
    name: "Lambasaia",
    location: LOCATION.BRAZIL,
  };

  const result = verifyAge(casino, [brazilian]);
  expect(result.americans.unallowed.length).toBe(0);
});

test("No one allowed", () => {
  const brazilian: User = {
    name: "Devante Adams",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const american: User = {
    name: "Za'Darius Smith",
    age: 19,
    nacionality: NACIONALITY.AMERICAN,
  };

  const casino: Casino = {
    name: "Lambeau Field",
    location: LOCATION.EUA,
  };

  const result = verifyAge(casino, [brazilian, brazilian, american, american]);

  expect(result.brazilians.unallowed).toContain("Devante Adams");
  expect(result.americans.unallowed).toContain("Za'Darius Smith");
});

test("2 american allowed and 2 brazilians unallowed", () => {
  const brazilian: User = {
    name: "Devante Adams",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const american: User = {
    name: "Za'Darius Smith",
    age: 21,
    nacionality: NACIONALITY.AMERICAN,
  };

  const casino: Casino = {
    name: "Lambeau Field",
    location: LOCATION.EUA,
  };

  const result = verifyAge(casino, [brazilian, brazilian, american, american]);
  expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
  expect(result.americans.unallowed.length).toBeLessThan(1);
  expect(result.americans.allowed.length).toBe(2);
});
