/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
 
  Text,
} from 'react-native';
import Home from './src/screens/Home';
import Post from './src/components/Post';

import posts from './src/assets/data/feed';
import SearchResults from './src/screens/SearchResults';
import DestinationSearch from './src/screens/DestinationSearch';


const App: () => Node = () => {



  return (
    <SafeAreaView >
        <DestinationSearch/>
    </SafeAreaView>
  );
};


export default App;
