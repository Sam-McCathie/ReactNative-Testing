import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Home: React.FC<any> = ({navigation}) => {
  const [user, setUser] = useState<string>('');
  const onPressHandler = () => {
    // pass data between screens
    navigation.navigate('Login', {
      user: user,
    });
  };

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  useEffect(() => setUser(''), []);

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.heading}>Home</Text>
        <TextInput
          style={styles.userInput}
          value={user}
          onChangeText={value => setUser(value)}
        />
        <Pressable style={styles.button} onPress={onPressHandler}>
          <Text>Login</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={toggleDrawer}>
          <Text>Toggle Drawer</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'KdamThmorPro-Regular', // use full name of font file that has been uploaded
  },
  button: {
    backgroundColor: 'pink',
    maxWidth: 100,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  userInput: {
    width: 200,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'pink',
    textAlign: 'center',
    fontSize: 15,
    padding: 10,
    marginVertical: 10,
  },
});

export default Home;
