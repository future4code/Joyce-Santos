import {
  NACIONALITY,
  LOCATION,
  User,
  Casino,
  Result,
  ResultItem
} from "../exercicio3/entities";

export function verifyAge(casino: Casino, users: User[]): Result {
  const allowed: User[] = [];
  const unallowed: User[] = [];

  for (const user of users) {
    if (casino.location === LOCATION.EUA) {
      if (user.age >= 21) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
    } else if (casino.location === LOCATION.BRAZIL) {
      if (user.age >= 18) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
      break;
    }
  }

     const brazilians: ResultItem = {
        allowed: allowed
            .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
            .map((user) => user.name),
        unallowed: unallowed
            .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
            .map((user) => user.name)
    };

    const americans: ResultItem = {
        allowed: allowed
            .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
            .map((user) => user.name),
        unallowed: unallowed
            .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
            .map((user) => user.name)
    };

    return { brazilians, americans };
}; 