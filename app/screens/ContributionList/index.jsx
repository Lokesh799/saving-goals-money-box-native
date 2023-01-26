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
import AddGoalsBtn from '../../sharedHeader';
import SharedHeader from '../../sharedHeader';
import {AsyncStorage} from 'react-native';

const ContributionList = props => {
  const [selectedId, setSelectedId] = useState();
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
      <SharedHeader
        title="Contribution"
        navigationLeft="GoalsInfo"
        iconLeft="left"
        iconRight="plus"
        navigationRight="Form"
      />
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
