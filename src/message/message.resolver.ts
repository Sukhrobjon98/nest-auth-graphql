import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { MessageService } from './message.service';

@Resolver('Message')
export class MessageResolver {
  constructor(private readonly messageService: MessageService) { }



  @Query(() => [String])
  getAllMessages() {
    return this.messageService.getAllMessages();
  }

  @Mutation(()=>String)
  createMessage(@Args('content') content: string) {
    return this.messageService.createMessage(content);
  }

  @Subscription(() => [String])
  messageCreated() {
    return this.messageService.messageCreated();
  }
}
