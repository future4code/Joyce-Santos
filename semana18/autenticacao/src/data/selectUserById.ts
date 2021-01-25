import {connection} from "../index"

const userTableName = "user";

export async function selectUserById(id: string): Promise<any> {

    const result = await connection.raw(`
    SELECT * FROM ${userTableName}
    WHERE ${id}
    `)
    return result[0];
  }