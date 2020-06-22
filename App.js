import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Feed from './screens/Feed'

export default function App() {
  return (
    <View style={styles.container}>
      <Feed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "lightgrey", 
  },
});
