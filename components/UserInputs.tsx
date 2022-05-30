import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const UserInputs: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [mobile, setMobile] = useState<string>();

  return (
    <View>
      <Text style={{marginBottom: 10}}>User Inputs</Text>
      <Text>Please write your name:</Text>
      <TextInput
        style={styles.textInput}
        placeholder={'e.g. Sammy Boy'}
        onChangeText={value => setName(value)}
      />
      <Text style={{marginBottom: 20}}>Name: {name}</Text>
      <Text>Please add your mobile:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="021234567"
        keyboardType="numeric" // when opened on a device -> will open a keyboard with just numbers
        onChangeText={value => setMobile(value.replace(/[^0-9]/g, ''))} // will replace any value
        value={mobile}
      />
      <Text>Mobile: {mobile}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'pink',
    textAlign: 'center',
    fontSize: 15,
    padding: 10,
  },
});

export default UserInputs;
