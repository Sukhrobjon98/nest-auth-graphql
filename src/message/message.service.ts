import { Injectable } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';

@Injectable()
export class MessageService {
    private messages = ['message1', 'message2', 'message3', 'message4', 'message5'];
    private pubSub: PubSub = new PubSub();


    getAllMessages() {
        return this.messages;
    }

    createMessage(content: string) {
        const message = content
        this.messages.push(message);
        this.pubSub.publish('messageCreated', { messageCreated: this.messages });
        return message;
    }

    async messageCreated() {
        return this.pubSub.asyncIterator('messageCreated');
    }
}
