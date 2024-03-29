import { Field, InputType } from "@nestjs/graphql";
import { IsString } from "class-validator";


@InputType()
export class LoginUserInput {
    @IsString()
    @Field(() => String)
    username: string
    @IsString()
    @Field(() => String)
    password: string
}