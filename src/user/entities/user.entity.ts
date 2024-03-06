import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user'
})
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number

  @Column({
    type: 'varchar'
  })
  @Field(() => String)
  username: string


  @Column({
    type: 'varchar'
  })
  @Field(() => String)
  password: string
}


