import { UserModel } from "./user-model";

export class Auth{
    constructor(
    public userDTO: UserModel,
    public token: string
    ){}
}