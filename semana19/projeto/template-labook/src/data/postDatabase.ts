import {connection} from "./connection"

export const insertPostData = async (
    id: string,
    photo: string,
    description: string,
    type: string,
    author_id: string
): Promise<void> =>{
    await connection("labook_posts")
         .insert({
            id,
            photo,
            description,
            type,
            author_id
         })
}

export const searchPostById = async(id: string) =>{
    const result = await connection("labook_posts")
    .select("*")
    .where({ id });

    return result

}
