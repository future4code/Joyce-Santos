import { connection } from "../index";

export default async function selectAllUsersByFilters(
  userName: string,
  type: string,
  orderBy: string,
  limit: string,
  offset: string
): Promise<any> {
  const result = await connection.raw(`
      SELECT *
      FROM aula48_exercicio
      WHERE name LIKE "%${userName}%"
      AND type = "${type}"
      ORDER BY ${orderBy}
      LIMIT 5
      OFFSET ${offset};
    `);

  return result[0];
}
