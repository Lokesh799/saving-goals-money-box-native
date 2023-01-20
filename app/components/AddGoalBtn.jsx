import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AddGoalsBtn = props => {
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
  },
});
export default AddGoalsBtn;
