import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Spacer from './Spacer';
import SendSMS from 'react-native-sms';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';

export default function App() {
  const [outputText, setOutputText] = useState(' ');
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>{outputText}</Text> */}
      {/* <Spacer /> */}
      <Button
        buttonStyle={{
          backgroundColor: '#3f4441',
          width: '100%',
        }}
        titleStyle={{
          color: 'white',
          fontSize: 36,
        }}
        title='I want Attention'
        onPress={() => setOutputText('Luke has been notified!')}
      />
      {outputText ? <Text style={styles.text}>{outputText}</Text> : null}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5e6f64',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15,
  },
});
