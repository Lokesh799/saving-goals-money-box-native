import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SharedHeader = ({
  title,
  iconRight,
  iconLeft,
  navigationRight,
  navigationLeft,
  submitHandler,
}) => {
  console.log('djfnjdf', submitHandler);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AntDesign
        name={iconLeft}
        size={30}
        style={styles.back}
        onPress={() => navigation.navigate(navigationLeft)}
      />
      <View style={styles.view1}>
        <Text style={styles.headertxt}> {title} </Text>
      </View>

      <View style={styles.view2}>
        <TouchableOpacity>
          <AntDesign
            name={iconRight}
            size={30}
            style={styles.plusbtn}
            onPress={() =>
              title == 'Add Contribution'
                ? submitHandler()
                :
              navigation.navigate(navigationRight)
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const AddGoalsBtn = ({props, mainHeaderstate, listHeader, infoHeader}) => {
  const navigation = useNavigation();
  return (
    <>
      {/* {mainHeaderstate && <MainHeader {...props} />} */}
      {listHeader && <ListHeader {...props} />}
      {infoHeader && <GoalInfoHeader {...props} />}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d0d0d',
    flexDirection: 'row',
    textAlign: 'center',
    height: 80,
    borderRadius: 5,
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
    fontSize: 25,
    paddingTop: 20,
    textAlign: 'right',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginRight: 20,
  },
  headertxtInfo: {
    color: 'white',
    fontSize: 25,
    paddingTop: 20,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  plusbtn: {
    color: 'white',
    fontSize: 32,
    paddingRight: 15,
    textAlign: 'right',
    marginRight: 50,
    paddingTop: 20,
  },
  plusbtnmain: {
    color: 'white',
    fontSize: 32,
    paddingRight: 15,
    textAlign: 'right',
    marginRight: 30,
    paddingTop: 20,
  },
  back: {
    color: 'white',
    fontSize: 32,
    paddingLeft: 10,
    marginBottom: 30,
    paddingTop: 20,
  },
});
export default SharedHeader;
