import { connection } from "../index";
import { userAddress } from "../types/address";

const addressTableName = "address";

export const createUserAddress = async (newAddress: userAddress): Promise<void> => {
  await connection.raw(`
    INSERT ${newAddress} INTO ${addressTableName}
    `);

};
