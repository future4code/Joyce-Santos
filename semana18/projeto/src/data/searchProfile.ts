import { connection } from ".."

const userTableName = "newUser"

export const getUserById = async (id: string): Promise<any>=>{

    const result = await connection
    .select("id", "name", "email")
    .from(userTableName)
    .where({id})

    return result[0]

}