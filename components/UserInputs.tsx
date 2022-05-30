import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const UserInputs: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
        keyboardType="number-pad" // when opened on a device -> will open a keyboard with just numbers
        maxLength={10} // max characters
        onChangeText={value => setMobile(value.replace(/[^0-9]/g, ''))} // will replace any value
        // editable={false} will disable the text field
        value={mobile}
      />
      <Text style={{marginBottom: 20}}>Mobile: {mobile}</Text>

      <Text>Password (will display below)</Text>
      <TextInput
        style={styles.textInput}
        secureTextEntry
        onChangeText={value => setPassword(value)}
      />
      <Text>Password: {password}</Text>
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
