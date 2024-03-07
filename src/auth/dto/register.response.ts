import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/user/entities/user.entity";

@ObjectType()
export class RegisterResponse {
    @Field(() => String)
    access_token: string
    @Field(() => User)
    user: User
}