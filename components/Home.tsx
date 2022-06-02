import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const Home: React.FC<any> = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('A');
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
        <Pressable style={styles.screenAButton} onPress={onPressHandler}>
          <Text>Got to screen A</Text>
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

export default Home;
