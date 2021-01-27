import { connection } from "../index";

const userTableName = "user";

export const selectUserByEmail = async (email: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM ${userTableName}
    WHERE "${email}"
    `);
  return result[0];
};
