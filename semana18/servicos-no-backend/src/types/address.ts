export type address = {
  street: string,
  neighborhood: string,
  city: string,
  state: string
};

export type userAddress = {
  id: string,
  street: string,
  number: number,
  neighborhood: string,
  complement?: string,
  city: string,
  state: string,
  user_id: string
}
