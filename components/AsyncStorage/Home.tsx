import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

const Home: React.FC = () => {
  const [name, setName] = useState('');

  // returns when the component is used
  const isFocused = useIsFocused();

  const getData = () => {
    try {
      AsyncStorage.getItem('UserName').then(value => {
        if (value !== null) {
          setName(value);
          console.log(name);
        } else console.error('invalid');
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [isFocused]);

  return (
    <SafeAreaView>
      <Text>Welcome {name}!</Text>
    </SafeAreaView>
  );
};

export default Home;
