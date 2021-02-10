import { Character } from "./character";
import { validateCharacter } from "./validadeCharacter";

export const performAttack = (attacker: Character, defender: Character) =>{
    if(!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error("Invalid Character")
    }

    if (attacker.strength > defender.defense){
        defender.life -= attacker.strength - defender.defense
    }
};


export const performAttackInversion = (attacker: Character, defender: Character, validator: (input: Character) => boolean) =>{
    if(!validator(attacker) || !validator(defender)){
        throw new Error("Invalid Character");
    }
    if(attacker.strength > defender.defense){
        defender.life -= attacker.strength - defender.defense
    }
}
