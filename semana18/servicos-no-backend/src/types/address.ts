export type address = {
  name: string,
  neighborhood: string,
  city: string,
  state: string
};

export type userAddress = {
  id: string,
  name: string,
  number: number,
  neighborhood: string,
  complement?: string,
  city: string,
  state: string,
  user_id: string
}
