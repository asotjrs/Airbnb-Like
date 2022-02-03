import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './style';

const Post = ({post}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri:post.image}}/>
        <Text style={styles.bedrooms}>{post.bed} beds {post.bedrooms} bedrooms</Text>
        <Text style={styles.description} numberOfLines={2}>
          {post.type}. {post.title}
        </Text>

        <Text style={styles.prices}>
          <Text style={styles.oldPrice}>{post.oldPrice} $ </Text>
          <Text style={styles.newPrice}>{post.newPrice} $ </Text>
          / text

        </Text>

        <Text style={styles.totalPrice}>{post.totalPrice} $</Text>


    </View>
  );
};

export default Post;
