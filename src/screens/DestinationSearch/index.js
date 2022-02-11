import { View, Text, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import  searchResults  from "../../assets/data/search";
import Entypo from "react-native-vector-icons/Entypo"
const DestinationSearch = () => {

  const [inputText, setInputText]=useState("");
  return (
    <View style={styles.container}>
        <TextInput
        style={styles.textInput}
        placeholder={"Where are you going ?"}
        value={inputText}
        onChangeText={setInputText}
        />
        <FlatList
        data={searchResults}
        renderItem={({item})=><View style={styles.row}>
          <View style={styles.iconContainer}>
            <Entypo name='location-pin' size={30}/>

          </View>
        <Text style={styles.locationText}>{item.description}</Text>
        </View>}
        />

    </View>
  );
};

export default DestinationSearch;
