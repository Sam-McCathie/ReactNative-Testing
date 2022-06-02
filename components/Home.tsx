import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const Home: React.FC<any> = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('A');
  };

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
        <Pressable style={styles.screenAButton} onPress={onPressHandler}>
          <Text>Got to screen A</Text>
        </Pressable>
        <Pressable style={styles.screenAButton} onPress={toggleDrawer}>
          <Text>Toggle Drawer</Text>
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
    marginBottom: 10,
  },
});

export default Home;
