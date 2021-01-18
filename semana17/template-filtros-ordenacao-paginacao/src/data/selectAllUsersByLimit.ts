import { connection } from "../index";

export default async function selectAllUsersByLimit(
  page: Number
): Promise<any> {
  const result = await connection.raw(`
       SELECT *
       FROM aula48_exercicio
       LIMIT 5 OFFSET ${page}
    `);

  return result[0];
}
