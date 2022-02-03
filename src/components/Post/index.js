import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './style';

const Post = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri:"https://a0.muscache.com/im/pictures/99520c0d-1ce4-40f7-a690-6aea006ad129.jpg?im_w=1200"}}/>
        <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>
        <Text style={styles.description} numberOfLines={2}>some dump text that will be displayed 
        in the text description placeholder so its gonna be amazing  okay !
        and this kinda things are gonna be amazing , so rite again and again
        and you will see whats going on 
        </Text>

        <Text style={styles.prices}>
          <Text style={styles.oldPrice}>340€  </Text>
          <Text style={styles.newPrice}>99€  </Text>
          / text

        </Text>

        <Text style={styles.totalPrice}>122€ Total</Text>


    </View>
  );
};

export default Post;
