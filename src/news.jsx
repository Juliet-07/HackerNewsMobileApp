import React from 'react';
import {View} from 'react-native';
import {Text, SearchBar} from 'react-native-elements';
import {styles} from './styles.js';

const News = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text>MY NEWS APP</Text>
      </View>
    </View>
  );
};
export default News;
