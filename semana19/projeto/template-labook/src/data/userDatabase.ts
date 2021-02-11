import { connection } from "./connection";

export const insertUseData = async (
  id: string,
  name: string,
  email: string,
  password: string
): Promise<void> => {
  await connection("labook_users")
  .insert({
    id,
    name,
    email,
    password,
  });
};

export const selectUseryEmail = async(
  email: string
) =>{

  const queryResult: any = await connection("labook_users")
    .select("*")
    .where({ email });

    return queryResult
}



