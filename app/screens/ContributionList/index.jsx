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
import {useIsFocused, useNavigation} from '@react-navigation/native';

const ContributionList = props => {
  let title = props.route.params?.title;

  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState();
  const [listData, setListData] = useState();
  const isFocused = useIsFocused();

  const getUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem('contribution');
      const currentUser = JSON.parse(savedUser);
      setListData(currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [isFocused]);


  return (
    <>
      <SharedHeader
        title="Contribution"
        navigationLeft="GoalsInfo"
        iconLeft="left"
        iconRight="plus"
        navigationRight="Form"
        isTitle={title}
      />
      <SafeAreaView style={styles.container}>
        <FlatList
          style={{overflow: 'hidden'}}
          data={Object?.keys(listData || {})}
          renderItem={({item}) => {
            return (
              <>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Form', {
                      id: listData[item]?.id,
                      isTitle: title,
                    });
                  }}>
                  <View style={{overflow: 'hidden'}}>
                    <View style={styles.item}>
                      <Text style={styles.title}>{listData[item]?.date}</Text>
                      <Text
                        style={[
                          styles.title,
                          {paddingLeft: '50%', color: '#0275d8'},
                        ]}>
                        +{listData[item]?.amount}RUB
                      </Text>
                    </View>
                    <Text style={{marginTop: -18}} numberOfLines={1}>
                      _________________________________________________________________
                    </Text>
                  </View>
                </TouchableOpacity>
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
    marginTop: -100,
    overflow: 'hidden',
  },
  item: {
    padding: 25,
    marginVertical: 6,
    marginHorizontal: 22,
    borderRadius: 15,
    flexDirection: 'row',
    // display:'flex',
    // justifyContent:'center',
  },
  title: {
    fontSize: 20,
  },
});

export default ContributionList;
