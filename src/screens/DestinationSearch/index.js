import { View, Text, TextInput } from 'react-native';
import React from 'react';
import styles from './styles';

const DestinationSearch = () => {
  return (
    <View>
        <TextInput
        style={styles.textInput}
        placeholder="Where are you going ?"
        />

    </View>
  );
};

export default DestinationSearch;
