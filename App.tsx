import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
// StylesSheet -> allows you to add styles. Styles are added inside objects like you would with React
// Text -> replaces h1, p, span tags etc
// View -> replaces div
// SafeAreaView -> adjusts the view to the users device

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Text style={styles.text}>Count: {count}</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="-"
            color="white"
            onPress={() => setCount(count => count - 1)}></Button>
          <Button
            title="+"
            color="white"
            onPress={() => setCount(count => count + 1)}></Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '900',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default App;
