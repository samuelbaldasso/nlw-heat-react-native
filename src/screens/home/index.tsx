import React from 'react';
import {View, Text} from 'react-native'
import {styles} from './styles'
import {Header} from '../../components/header';
import { MessageList } from '../../components/MessageList';
import { SignInBox } from '../../components/SignInBox';

export function Home(){
    return (
        <View style={styles.container}>
           <Header></Header>
            <MessageList/>
            <SignInBox/>
        </View>
    )
}