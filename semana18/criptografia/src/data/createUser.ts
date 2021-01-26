import { connection } from "../index";

const userTableName = "user";

export const createUser = async (
  id: string,
  email: string,
  password: string
): Promise<any> => {
  await connection.raw(`
    INSERT INTO ${userTableName} (id, email, password)
    VALUES ("${id}", "${email}", "${password}")
    `);
};
