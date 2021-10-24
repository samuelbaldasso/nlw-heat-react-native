import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import LogoSvg from '../../assets/logo.svg';
import { UserPhoto } from '../UserPhoto'

export function Header() {
  return (

    <View style={styles.container}>

      <LogoSvg></LogoSvg>

      <View style={styles.logoutButton}>
      <TouchableOpacity>
        <Text style={styles.LogoutText}>Sair</Text>
      </TouchableOpacity>


      <UserPhoto 
      imageUri="https://randomuser.me/api/portraits/women/44.jpg"/>
      </View>
    
    </View>

  )
}