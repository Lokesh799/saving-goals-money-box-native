import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ListHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AntDesign
        name="left"
        size={30}
        style={styles.back}
        onPress={() => navigation.navigate('GoalsInfo')}
      />
      <View style={styles.view1}>
        <Text style={styles.headertxt}> Contribution </Text>
      </View>

      <View style={styles.view2}>
        <TouchableOpacity>
          <Text
            style={styles.plusbtn}
            onPress={() => navigation.navigate('Form')}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const MainHeader = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.headertxt}> Goals </Text>
      </View>

      <View style={styles.view2}>
        <TouchableOpacity>
          <Text
            style={styles.plusbtn}
            onPress={() => navigation.navigate('AddGoals')}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const AddGoalsBtn = ({props, mainHeaderstate, listHeader}) => {
  const navigation = useNavigation();
  return (
    <>
      {mainHeaderstate && <MainHeader {...props} />}
      {listHeader && <ListHeader {...props} />}
      {/* {contributionHeader && <ContributionFormHeader {...props} />} */}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d0d0d',
    flexDirection: 'row',
  },
  view1: {
    width: 250,
  },
  view2: {
    textAlign: 'right',
    width: 170,
  },
  headertxt: {
    color: 'white',
    fontSize: 30,
    paddingTop: 5,
    textAlign: 'right',
  },
  plusbtn: {
    color: 'white',
    fontSize: 42,
    paddingRight: 15,
    marginBottom: 6,
    textAlign: 'right',
    marginRight: 50,
  },
  back: {
    color: 'white',
    fontSize: 32,
    paddingLeft: 10,
    marginBottom: 30,
    paddingTop: 10,
  },
});
export default AddGoalsBtn;
