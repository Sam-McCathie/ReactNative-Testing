import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

// works even though error shows
const Login: React.FC = ({navigation}) => {
  const [name, setName] = useState('');

  const setData = async () => {
    if (name.length === 0) {
      Alert.alert('Please enter a name before logging in.');
    } else {
      try {
        await AsyncStorage.setItem('UserName', name);
        navigation.navigate('Home');
        console.log('Ran');
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.heading}>Async Storage</Text>
      <TextInput
        value={name}
        onChangeText={value => setName(value)}
        placeholder="Enter your name pls"
        style={styles.nameInput}
      />
      <TouchableOpacity onPress={setData} style={styles.button}>
        <Text style={styles.buttonText}>Add Name</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
  },
  nameInput: {
    borderColor: 'blue',
    borderWidth: 2,
    width: 200,
    textAlign: 'center',
    paddingVertical: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    padding: 10,
  },
});

export default Login;
