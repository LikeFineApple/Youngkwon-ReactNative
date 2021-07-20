/* eslint-disable */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {viewStyles, textStyles} from './style';
import {Header, Contents, Footer} from './components/Layout';

const App = () => {
  return (
    <View style={viewStyles.container}>
      {/* <Text style={[textStyles.text, {color: 'green'}]}>
        Inline Styling - Text
      </Text>
      <Text style={[textStyles.text, textStyles.error]}>
        Inline Styling - Error
      </Text> */}
      <Header />
      <Contents />
      <Footer />
    </View>
  );
};

export default App;
