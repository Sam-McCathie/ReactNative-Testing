import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from 'react-native';

interface Data {
  text: string;
  id: number;
}

const App: React.FC = () => {
  const [list, setList] = useState<Data[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleAddItem = (listLength: number) => {
    setList([...list, {text: `Item${listLength + 1}`, id: Date.now()}]);
  };

  // handler to demo a function being called from a refresh
  const handleRefreshAdd = () => {
    handleAddItem(list.length + 100);
  };

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => handleRefreshAdd()}
          />
        }>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>List</Text>
          <Button
            title="Add"
            color="white"
            onPress={() => handleAddItem(list?.length ?? 0)}></Button>
          <Button
            title="clear"
            color="red"
            onPress={() => setList([])}></Button>
        </View>
        {list?.length ? (
          <View>
            {list?.map((data, index) => {
              return (
                <Text
                  style={[
                    styles.listItem,
                    index === 0 ? styles.listItemFirst : {},
                  ]}>
                  ID: {data.id}, Content: {data.text}, Index: {index}
                </Text>
              );
            })}
          </View>
        ) : (
          <Text style={styles.warning}>No items...</Text>
        )}
      </ScrollView>
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
