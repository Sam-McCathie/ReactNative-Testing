import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const Stack = createStackNavigator();

// not sure what type navigation is
const ScreenA: React.FC<any> = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('Screen B');
  };
  return (
    <SafeAreaView>
      <View>
        <Text>Hello from screen A</Text>
        <Pressable style={styles.screenAButton} onPress={onPressHandler}>
          <Text>Next Screen</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const ScreenB: React.FC<any> = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('Screen A');
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Hello from screen A</Text>
        <Pressable style={styles.screenAButton} onPress={onPressHandler}>
          <Text>Prev Screen</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      {/*Hide header within screenOptions prop */}
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Screen A" component={ScreenA} />
        <Stack.Screen name="Screen B" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
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

export default Navigation;
