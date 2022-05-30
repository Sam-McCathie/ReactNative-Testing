import React, {useState} from 'react';
import {
  Text,
  SectionList,
  StyleSheet,
  ScrollView,
  RefreshControl,
  View,
} from 'react-native';

type Data = {
  title: string;
  data: string[];
};

// Good for displaying nested arrays
function SectionListExample() {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [DATA, setDATA] = useState<Data[]>([
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1'],
    },
    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2'],
    },
  ]);

  const handleRefreshAdd = () => {
    const next = DATA.length + 1;
    setRefreshing(true);
    setDATA([
      ...DATA,
      {
        title: `Title ${next}`,
        data: [`Item ${next}-1`, `Item ${next}-2`],
      },
    ]);
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => handleRefreshAdd()}
        />
      }>
      <View>
        <SectionList
          keyExtractor={(item, index) => index.toString()} // should use an id in best practice
          sections={DATA}
          renderItem={({item}) => <Text>{item}</Text>} // mapping through each array within each item
          renderSectionHeader={({section}) => (
            <Text style={styles.heading}>{section.title}</Text> //Add before each render item
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: '800',
    marginTop: 20,
  },
});

export default SectionListExample;
