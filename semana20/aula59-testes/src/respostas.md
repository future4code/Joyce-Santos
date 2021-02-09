### EXERCÍCIO 1

### a. 

```typescript
export interface Character {
    name: string;
    life: number;
    strength: number;
    defense: number;
  }
```

### b. 

```typescript
import { Character } from "./character";

export const validateCharacter = (input: Character): boolean => {
  if (
    !input.name ||
    input.life === undefined ||
    input.strength === undefined ||
    input.defense === undefined
  ) {
    return false;
  }
  if (input.life <= 0 || input.strength <= 0 || input.defense <= 0) {
    return false;
  }
  return true;
};
```

### EXERCÍCIO 2

### a. 
```typescript
test("Should return false for empty name", ()=>{
    const result = validateCharacter({
        name: "",
        life: 1500,
        strength: 300,
        defense: 500
    });
    expect(result).toBe(false)
})
```
### b. 
```typescript
test("Should return false for life 0", () => {
  const result = validateCharacter({
    name: "Miya",
    life: 0,
    strength: 300,
    defense: 500,
  });
  expect(result).toBe(false);
});
```
### c. 
```typescript
test("Should return false for strength 0", () => {
  const result = validateCharacter({
    name: "Balmont",
    life: 1500,
    strength: 0,
    defense: 500,
  });
  expect(result).toBe(false);
});
```
### d. 
```typescript
test("Should return false for defense 0", () => {
  const result = validateCharacter({
    name: "Cecilion",
    life: 1500,
    strength: 300,
    defense: 0,
  });
  expect(result).toBe(false);
});
```
### e. 
```typescript
test("Should return false for negative atributs", () => {
  const result = validateCharacter({
    name: "Estes",
    life: -200,
    strength: 300,
    defense: 500,
  });
  expect(result).toBe(false);
});
```
### f. 
```typescript
test("Should return true for all valid inputs", () => {
  const result = validateCharacter({
    name: "Esmeralda",
    life: 1500,
    strength: 300,
    defense: 500,
  });
  expect(result).toBe(true);
});
```
### EXERCÍCIO 3

### a.
```typescript
export const performAttack = (attacker: Character, defender: Character) =>{
    if(!validateCharacter(attacker) || !validateCharacter(defender)){
        throw new Error("Invalid Character");
    }

    if(attacker.strength > defender.defense){
        defender.life -= attacker.strength - defender.defense
    }
};
``` 
### b.
```typescript
export const performAttackInversion = (attacker: Character, defender: Character, validator: (input: Character) => boolean) =>{
    if(!validator(attacker) || !validator(defender)){
        throw new Error("Invalid Character");
    }
    if(attacker.strength > defender.defense){
        defender.life -= attacker.strength - defender.defense
    }
}

``` 

### c.

### Na primeira função estamos usando a função validadeCharacter para fazer a validação e na segunda não, é feito diretamente.



### EXERCÍCIO 4

### a.
### Na função validateCharacter, pois se os dados não forem válidos, não será possível rodar a próxima função.


### b.
```typescript
test("Creating Mocks", ()=>{
    const validatorMock = jest.fn(()=>{
        return true
    })
})
``` 

### c.

```typescript
test("Creating Mocks", ()=>{
    const validatorMock = jest.fn(()=>{
        return false
    })
});
``` 

### EXERCÍCIO 5

### a.
```typescript
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
``` 
### b.
```typescript
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
      performAttack(attacker, defender, validatorMock as any);
    } catch (err) {
      expect(err.message).toBe("Invalid Character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });

``` 

### EXERCÍCIO 6

### a.
```typescript

``` 
