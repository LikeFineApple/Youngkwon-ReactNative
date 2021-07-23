/* eslint-disable */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {viewStyles, textStyles} from './style';
import {Header, Contents, Footer} from './components/Layout';
import ShadowBox from './components/ShadowBox';
import styled from 'styled-components/native';
import Button from './components/Button';
import Input from './components/Input';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    // <View style={viewStyles.container}>
    //   {/* <Text style={[textStyles.text, {color: 'green'}]}>
    //     Inline Styling - Text
    //   </Text>
    //   <Text style={[textStyles.text, textStyles.error]}>
    //     Inline Styling - Error
    //   </Text> */}
    //   {/* <Header />
    //   <Contents />
    //   <Footer /> */}
    // <ShadowBox />
    // </View>
    // <Container>
    //   <Button title="Hanbit"></Button>
    //   <Button title="React Natvie"></Button>
    //   <Input />
    // </Container>
  );
};

export default App;
