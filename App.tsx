import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  Button,
  View,
} from 'react-native';

interface Data {
  text: string;
  created: number;
}

const App: React.FC = () => {
  const [list, setList] = useState<Data[]>([{text: 'yello', created: 123}]);

  const handleAddItem = (listLength: number) => {
    setList([...list, {text: `Item${listLength + 1}`, created: Date.now()}]);
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>List</Text>
        <Button
          title="Add"
          color="white"
          onPress={() => handleAddItem(list?.length ?? 0)}></Button>
        <Button title="clear" color="red" onPress={() => setList([])}></Button>
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={list}
        renderItem={({item}) => (
          <Text style={styles.listItem}>
            created: {item.created}, Content: {item.text},
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  heading: {
    fontSize: 30,
    fontWeight: '900',
  },
  headingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: 'white',
  },
  warning: {
    color: 'yellow',
    textAlign: 'center',
  },
  listItem: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginTop: 10,
  },
  listItemFirst: {
    marginTop: 0,
  },
});

export default App;
