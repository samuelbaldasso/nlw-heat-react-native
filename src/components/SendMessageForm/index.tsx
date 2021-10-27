import React, {useState} from 'react';

import {
  View,
 TextInput
} from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm(){

const [message, SetMessage] = useState('')
const [sendingMessage, SetSendingMessage] = useState(false)

  return (
    <View style={styles.container}>
        <TextInput style={styles.input}
        keyboardAppearance='dark'
        placeholder='Qual sau expectativa para o evento?'
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={SetMessage}
        value={message}
        editable={!sendingMessage}
        >
        
        </TextInput>

        <Button title="ENVIAR MENSAGEM" backgroundColor={COLORS.PINK} color={COLORS.WHITE} isLoading={false}>

        </Button>
    </View>
  );
}