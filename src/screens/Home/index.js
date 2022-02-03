import { View, Text, ImageBackgroundBase, ImageBackground, Pressable } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';


import styles from './styles';

const Home = () => {
  return (
    <View>
     

        <ImageBackground source={{uri:"https://a0.muscache.com/im/pictures/9c84dd2b-a149-4730-88b0-ae1a97c17652.jpg"}}  style={styles.image}>
          
        <Pressable style={styles.searchButton} onPress={()=>console.warn("Explore more btn Clicked")}>
        <Icon name="search1" size={30} color="#900" />
            <Text style={styles.searchButtonText}>
            Where are you going ?
            </Text>            
            </Pressable>
            <Text style={styles.title}>
                Go 
                Near
            </Text>
            <Pressable style={styles.button} onPress={()=>console.warn("Explore more btn Clicked")}>
            <Text style={styles.buttonText}>
            Explore nearby space
            </Text>            
            </Pressable>

        </ImageBackground>

    </View>
  );
};

export default Home;
