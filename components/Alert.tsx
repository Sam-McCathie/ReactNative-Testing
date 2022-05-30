import React from 'react';
import {Text, View, Button, Alert} from 'react-native';

const AlertToast = () => {
  const handleError = () => {
    // Add buttons within the 3rd argument
    Alert.alert('Warning', 'This is an example error message??', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Action'),
      },
      {text: 'Continue', onPress: () => console.log('Continue Action')},
    ]);
  };

  return (
    <View>
      <Text>Alert & Toast Messgae</Text>
      <Text>(Will throw error)</Text>
      <Button title="Throw Error" color="pink" onPress={handleError}></Button>
    </View>
  );
};

export default AlertToast;
