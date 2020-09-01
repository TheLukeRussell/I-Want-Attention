import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';

export default function App() {
  const [outputText, setOutputText] = useState('Click the button if you want attention');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{outputText}</Text>
      <Button
        buttonStyle={{
          backgroundColor: '#3f4441',
          width: '100%',
          alignItems: 'center',
        }}
        titleStyle={{
          color: 'white',
          fontSize: 36,
        }}
        title='I want Attention'
        onPress={() => setOutputText('Luke has been notified!')}
      />
      {/* <Button
        buttonStyle={{ backgroundColor: '#5e6f64', width: '100%' }}
        title='Change Text'
        onPress={() => setOutputText('The text has been changed')}
      /> */}
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
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 30,
  },
});
