import { connection } from "../index";
import { userAddress } from "../types/address";

const addressTableName = "address";

export const createUserAddress = async (newAddress: userAddress) => {
  await connection((`${addressTableName}`))
  .insert(newAddress);


  
};
