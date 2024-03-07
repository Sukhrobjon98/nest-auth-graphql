import { Field, InputType } from "@nestjs/graphql";
import { IsString } from "class-validator";



@InputType()
export class RegisterUserInput {
    @IsString()
    @Field(() => String)
    username: string
    
    @IsString()
    @Field(() => String)
    password: string
}   