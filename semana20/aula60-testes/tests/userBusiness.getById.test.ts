import { UserBusiness } from "../src/business/UserBusiness";
import { stringToUserRole, User, UserRole } from "../src/model/User";
import { HashGenerator } from "../src/services/hashGenerator";
import { IdGenerator } from "../src/services/idGenerator";
import { TokenGenerator } from "../src/services/tokenGenerator";

describe("Testing UserBusines.getUserById", () => {
  let userDatabase = {} as any;
  let hashGenerator = {} as HashGenerator;
  let tokenGenerator = {} as TokenGenerator;
  let idGenerator = {} as IdGenerator;

  test("Should retur User not found error'", async () => {
    expect.assertions(3);
    const getUserById = jest.fn(async (id: string) => undefined) as any;
    userDatabase = { getUserById };

    const userBusiness = new UserBusiness(
      idGenerator,
      hashGenerator,
      userDatabase,
      tokenGenerator
    );

    try {
      await userBusiness.getUserById("Invalid-id");
    } catch (error) {
      expect(error.statusCode).toBe(404);
      expect(error.message).toBe("User not found");
      expect(userDatabase.getUserById).toHaveBeenCalled();
    }
  });

  test("Should return user", async () =>{
      const getUserById = jest.fn(
        (id: string) =>
          new User(
            "a43f7350-575e-4faf-91bd-33ca77ca3861",
            "Amora",
            "amorinha@email.com",
            "hash",
            stringToUserRole("ADMIN")
          )
      );
    userDatabase = {getUserById}

    const userBusiness = new UserBusiness(
      idGenerator,
      hashGenerator,
      userDatabase,
      tokenGenerator
    );
   const user = await userBusiness.getUserById("id");

   expect(getUserById).toHaveBeenLastCalledWith("id")
   expect(user).toEqual({
     id: "a43f7350-575e-4faf-91bd-33ca77ca3861",
     name: "Amora",
     email: "amorinha@email.com",
     role: UserRole.ADMIN,
   });
})
});


