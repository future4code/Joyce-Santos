import { connection } from "../index";

const userTableName = "user";

export const deleteUserById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    DELETE FROM ${userTableName}
    WHERE ${id}
    
    `);
};
