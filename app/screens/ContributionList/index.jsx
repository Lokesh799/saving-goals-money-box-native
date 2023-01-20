import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import AddGoalsBtn from '../../components/AddGoalBtn';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    date: 'Jan 12, 2023',
    title: '+ 30.00 RUB',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    date: 'Jan 12, 2023',
    title: '+ 30.00 RUB',
  },
  {
    id: '58694a0f-3da1-471f-d96-145571e29d72',
    date: 'Jan 12, 2023',
    title: '+ 30.00 RUB',
  },
  {
    id: '58690f-3da1-471f-d96-145571e29d72',
    date: 'Jan 13, 2023',
    title: '+ 20.00 RUB',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}, styles.date]}>
      {item.date}{' '}
      <View
        style={{
          width: 50,
        }}
      />{' '}
      {item.title}{' '}
    </Text>
  </TouchableOpacity>
);

FlatListItemSeparator = () => {
  return (
    <View
      style={{
        width: 30,
        backgroundColor: '#000',
      }}
    />
  );
};

const ContributionList = props => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#dcdcdc' : '#fffaf0';
    const color = item.id === selectedId ? 'black' : 'black';

    return (
      <>
        {/* <AddGoalsBtn {...props} /> */}
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={backgroundColor}
          textColor={color}
        />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        ItemSeparatorComponent={FlatListItemSeparator}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 25,
    marginVertical: 4,
    marginHorizontal: 22,
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
  },
});

export default ContributionList;
