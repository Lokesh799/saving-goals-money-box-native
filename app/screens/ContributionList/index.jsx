import React, {useEffect, useState} from 'react';
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
import {AsyncStorage} from 'react-native';

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

const Item = ({title}) => {
  console.log('heretititit', title);
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const ContributionList = props => {
  const [selectedId, setSelectedId] = useState();
  const [listHeader, setlistHeader] = useState(true);
  const [listData, setListData] = useState();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem('user');
      const currentUser = JSON.parse(savedUser);
      setListData(currentUser);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <AddGoalsBtn listHeader={listHeader} />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={Object?.keys(listData || {})}
          renderItem={({item}) => {
            return (
              <>
                <View style={styles.item}>
                  <Text style={styles.title}>{listData[item]?.date}</Text>
                  <Text style={styles.title}>{listData[item]?.amount}</Text>
                </View>
              </>
            );
          }}
        />
      </SafeAreaView>
    </>
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
