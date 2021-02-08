export function performPurchase(user: Client, value: number): Client | undefined {
  if (user.balance >= value) {
    return {
      ...user,
      balance: user.balance - value,
    };
  }
  return undefined;
}