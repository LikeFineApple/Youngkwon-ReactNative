/* eslint-disable */

import React, {useState} from 'react';
import {StyleSheet, View, Text, Switch} from 'react-native';
import {viewStyles, textStyles} from './style';
import {Header, Contents, Footer} from './components/Layout';
import ShadowBox from './components/ShadowBox';
import styled, {ThemeProvider} from 'styled-components/native';
import Button from './components/Button';
import Input from './components/Input';
import {lightTheme, darkTheme} from './theme';

// const Container = styled.View`
//   flex: 1;
//   background-color: #ffffff;
//   align-items: center;
//   justify-content: center;
// `;

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
  align-items: center;
  justify-content: center;
`;

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const _toggleSwitch = () => setIsDark(!isDark);

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

    // <ThemeProvider theme={theme}>
    //   <Container>
    //     <Button title="Hanbit"></Button>
    //     <Button title="React Natvie"></Button>
    //   </Container>
    // </ThemeProvider>

    <ThemeProvider theme={isDark ? darkTheme : lightTheme} >
      <Container>
        <Switch value={isDark} onValueChange={_toggleSwitch} />
          <Button title="Hanbit"></Button>
          <Button title="React Natvie"></Button>
      </Container>
    </ThemeProvider>

  );
};

export default App;
