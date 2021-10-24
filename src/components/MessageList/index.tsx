import React from 'react';
import { Message } from '../Message'
import {
  ScrollView,
  Text
} from 'react-native';

import { styles } from './styles';

export function MessageList() {

const message = {
  id: "1",
  text: "mensagem de teste",
  user: {
    name: "samuelbaldasso",
    avatar_url: 'string',
}

}
  return (
    <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="never" style={styles.container}>
     <Message data={message}></Message>
     <Message data={message}></Message>
     <Message data={message}></Message>
     <Message data={message}></Message>
    </ScrollView>
  );
}