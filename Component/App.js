/* eslint-disable */
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MyButton from './component/MyButton';
import EventButton from './component/EventButton';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={styles.text}>Button Component</Text>
      <MyButton onPress={() => alert("Prop's onPress")}>
        THISISCHILDREN
      </MyButton>
      <EventButton />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginBottom: 10,
  },
});

export default App;
