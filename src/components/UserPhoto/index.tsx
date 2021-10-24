import React from 'react';
import {
  Image,
} from 'react-native';

import { styles } from './styles';

export function UserPhoto() {
  return (
    <Image 
      source={{ uri: 'https://github.com/jeffymesquita.png'}}
      style={styles.avatar}
    />
      
    
  );
}