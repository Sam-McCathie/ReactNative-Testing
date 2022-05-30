import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

const CustomButtons: React.FC = () => {
  return (
    <View>
      <Text>TochableOpacity</Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7} // change opacity whenb clicked (0.2 = default)
      >
        <Text style={styles.buttonText}>Custom Button</Text>
      </TouchableOpacity>

      <Text>TouchableHighlight</Text>
      <TouchableHighlight
        style={styles.button}
        activeOpacity={0.7}
        underlayColor="blue"
        onPress={() => {}}>
        <Text style={styles.buttonText}>Custom Button</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 50,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '800',
    color: 'white',
  },
});

export default CustomButtons;
