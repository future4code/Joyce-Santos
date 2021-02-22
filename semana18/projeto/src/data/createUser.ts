import {connection} from "../index"
import { user } from "../types/user"

const userTableName = "newUser"

export const createUser = async (user: user): Promise<void> => {

await connection
    .insert(user)
    .into(userTableName)
}
