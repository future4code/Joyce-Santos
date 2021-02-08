import { NACIONALITY, LOCATION, User, Casino} from "../src/exercicio3/entities";
import { verifyAge } from "../src/exercicio3/exercicio3";


test("1 brazilian allowed", () => {
  const brazilian: User = {
    name: "Gilberto",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const casino: Casino = {
    name: "Brilho da Lua",
    location: LOCATION.BRAZIL,
  };

  const result = verifyAge(casino, [brazilian]);
  expect(result.brazilians.allowed).toEqual(["Gilberto"]);
});

test("1 american allowed", () => {
  const brazilian: User = {
    name: "Aaron Rodgers",
    age: 19,
    nacionality: NACIONALITY.AMERICAN,
  };

  const casino: Casino = {
    name: "Flor de Lotus",
    location: LOCATION.BRAZIL,
  };

  const result = verifyAge(casino, [brazilian]);
  expect(result.americans.allowed).toEqual(["Aaron Rodgers"]);
});

test("No one allowed", () => {
  const brazilian: User = {
    name: "Fabio Jordão BR",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const american: User = {
    name: "Fabiotax Oliveira EUA",
    age: 19,
    nacionality: NACIONALITY.AMERICAN,
  };

  const casino: Casino = {
    name: "Celebridade",
    location: LOCATION.EUA,
  };

  const result = verifyAge(casino, [brazilian, brazilian, american, american]);
  expect(result.brazilians.unallowed).toEqual([
    "Fabio Jordão BR",
    "Fabio Jordão BR",
  ]);
  expect(result.americans.unallowed).toEqual([
    "Fabiotax Oliveira EUA",
    "Fabiotax Oliveira EUA",
  ]);
});

test("2 american allowed and 2 brazilians unallowed", () => {
  const brazilian: User = {
    name: "Bastião BR",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const american: User = {
    name: "Jaque Patombá EUA",
    age: 21,
    nacionality: NACIONALITY.AMERICAN,
  };

  const casino: Casino = {
    name: "Balada Estelar",
    location: LOCATION.EUA,
  };

  const result = verifyAge(casino, [brazilian, brazilian, american, american]);
  expect(result.brazilians.unallowed).toEqual(["Bastião BR", "Bastião BR"]);
  expect(result.americans.allowed).toEqual([
    "Jaque Patombá EUA",
    "Jaque Patombá EUA",
  ]);
});

