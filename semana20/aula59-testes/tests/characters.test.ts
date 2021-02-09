import { Character } from "../src/character";
import { performAttack, performAttackInversion } from "../src/performAttack";
import { validateCharacter } from "../src/validadeCharacter"

test("Should return false for empty name", ()=>{
    const result = validateCharacter({
        name: "",
        life: 1500,
        strength: 300,
        defense: 500
    });
    expect(result).toBe(false)
})

test("Should return false for life 0", () => {
  const result = validateCharacter({
    name: "Miya",
    life: 0,
    strength: 300,
    defense: 500,
  });
  expect(result).toBe(false);
});

test("Should return false for strength 0", () => {
  const result = validateCharacter({
    name: "Balmont",
    life: 1500,
    strength: 0,
    defense: 500,
  });
  expect(result).toBe(false);
});

test("Should return false for defense 0", () => {
  const result = validateCharacter({
    name: "Cecilion",
    life: 1500,
    strength: 300,
    defense: 0,
  });
  expect(result).toBe(false);
});

test("Should return false for negative atributs", () => {
  const result = validateCharacter({
    name: "Estes",
    life: -200,
    strength: 300,
    defense: 500,
  });
  expect(result).toBe(false);
});

test("Should return true for all valid inputs", () => {
  const result = validateCharacter({
    name: "Esmeralda",
    life: 1500,
    strength: 300,
    defense: 500,
  });
  expect(result).toBe(true);
});

test("should perform attack", ()=>{
  const validatorMock = jest.fn(()=>{
    return true;
  });

  const attacker: Character = {
    name: "Miya",
    life: 1500,
    defense: 200,
    strength: 600
  }

  const defender: Character = {
    name: "Balmont",
    life: 1500,
    defense:400,
    strength: 800
  }

  performAttackInversion(attacker, defender, validatorMock as any);
  expect(defender.life).toEqual(1300);
  expect(validatorMock).toHaveBeenCalled();
  expect(validatorMock).toHaveBeenCalledTimes(2);
  expect(validatorMock).toHaveReturnedTimes(2);
});

test("Should return invalid character error", () => {
  expect.assertions(4);
  const validatorMock = jest.fn(() => {
    return false;
  });

  const attacker: Character = {
    name: "Esmeralda",
    life: 1500,
    defense: 200,
    strength: 600,
  };

  const defender: Character = {
    name: "Carmilla",
    life: 1500,
    defense: 400,
    strength: 800,
  };

  try {
    performAttackInversion(attacker, defender, validatorMock as any);
  } catch (err) {
    expect(err.message).toBe("Invalid Character");
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(1);
    expect(validatorMock).toHaveReturnedTimes(1);
  }
});