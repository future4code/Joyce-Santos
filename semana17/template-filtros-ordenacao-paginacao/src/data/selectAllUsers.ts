import {connection} from "../index";

export default async function selectAllUsers(): Promise<any> {
  const result = await connection.raw(`
      SELECT *
      FROM aula48_exercicio;
   `);

  return result[0];
}


