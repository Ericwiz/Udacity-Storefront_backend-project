import { User, UsersStore} from "../users";
import supertest from 'supertest';
import app from "../../server";
const request = supertest(app)
const user = new UsersStore()
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNjc1OTM2ODAzfQ.9mtebwHfUa5FC82x_P70eBVvF7UrFw-C1E2v-xOmgYI"

describe("Test for all the user models and endpoints", () => {
    describe("test for the user models", () => {
        it("expect an index method to be defined", () => {
            expect(user.index).toBeDefined()
        })

        it("expect an show method to be defined", () => {
            expect(user.show).toBeDefined()
        })

        it("expect an createUser method to be defined", () => {
            expect(user.createUser).toBeDefined()
        })

        it('should Create a user', async () => {
            const newUser: User = {
                firstname: "Eric",
                lastname: "Agu", 
                password: "agu001"
            }
            const myUser = await user.createUser(newUser);

            expect(myUser).toEqual({
                id: 1,
                firstname: "Eric",
                lastname: "Agu", 
                password: "agu001"
            })
        })

        it("Should return a list of users", async() => {
            const myUser = await user.index()
            expect(myUser).toEqual([{
                id: 1,
                firstname: "Eric",
                lastname: "Agu", 
                password: "agu001"
            }])
        })

        it("Should return a users", async() => {
            const myUser = await user.show('1')
            expect(myUser).toEqual({
                id: 1,
                firstname: "Eric",
                lastname: "Agu", 
                password: "agu001"
            })
        })

        describe("addProduct", () => {
            it("should add a product to an order", async () => {
              const productId = "123";
              const quantity = 10;
              const userId = "1";
              const status = "pending";
          
              const result = await user.addProduct(productId, quantity, userId, status);
        
              expect(result).toEqual({
                //   @ts-ignore
                product_id: productId,
                quantity: quantity,
                user_id: userId,
                status: status,
                id: 1
              });
            });
          
            it("should throw an error if the product could not be added", async () => {
              const productId = "";
              const quantity = 10;
              const userId = "1";
              const status = "pending";
          
              try {
                await user.addProduct(productId, quantity, userId, status);
              } catch (error) {
                expect(error).toEqual(error);
              }
            });
          });
          
    })
})

describe('It should test all Endpoints', () => {
    it('expects /users to be 200', async () => {
        const response = await request.get('/users').set("Authorization", `Bearer ${token}`)
        expect(response.status).toBe(200)
    })

    it('expects /users to create a new user', async () => {
        const newUser = {
            firstname: "John",
            lastname: "Doe",
            password: "password123"
        }
        const response = await request.post('/users')
            .set("Content-Type", "application/json")
            .send(newUser)
        expect(response.status).toBe(200)
    })
    

    it('expects /users/:id to be 200', async () => {
        const response = await request.get('/users/1').set("Authorization", `Bearer ${token}`)
        expect(response.status).toBe(200)
    })
    })