import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const Login: React.FC<any> = ({navigation, route}) => {
  const {user} = route.params;

  console.log(user);

  const onPressHandler = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Welcome, {user}</Text>
        <Pressable style={styles.screenAButton} onPress={onPressHandler}>
          <Text>Logout</Text>
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
    alignItems: 'center',
  },
});

export default Login;
