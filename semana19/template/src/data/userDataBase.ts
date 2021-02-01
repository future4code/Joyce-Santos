import { connection } from "..";
import { ROLES, user } from "../business/entities/user";

const userTableName = "User_Arq";

export async function createUser(
  id: string,
  name: string,
  email: string,
  password: string,
  role: ROLES
): Promise<void> {
    
  await connection
  .insert({id, name, email, password, role})
  .into(userTableName);
}
