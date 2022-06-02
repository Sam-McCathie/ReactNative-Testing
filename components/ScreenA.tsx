import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const ScreenA: React.FC<any> = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Hello from screen A</Text>
        <Pressable style={styles.screenAButton} onPress={onPressHandler}>
          <Text>Go Home</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  screenAButton: {
    backgroundColor: 'pink',
    maxWidth: 100,
    padding: 10,
    borderRadius: 5,
  },
});

export default ScreenA;
