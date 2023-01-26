import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SharedHeader from '../../sharedHeader';

const MainScreen = props => {
  const navigation = useNavigation();

  return (
    <View>
      <SharedHeader
        iconRight="plus"
        navigationRight="AddGoals"
        title="Goals"
        iconLeft="bars"
      />
      <ImageBackground
        source={{
          uri: 'https://img.lovepik.com/free-png/20210918/lovepik-vector-archery-png-image_400178690_wh300.png',
        }}
        style={styles.bgImg}></ImageBackground>
      <TouchableOpacity
        style={styles.btnArea}
        onPress={() => navigation.navigate('AddGoals')}>
        <Text style={styles.infoText}>You do not have active goals. </Text>
        <Text style={styles.infoText}> Press "Add Goal" to start. </Text>
        <Text style={styles.addGoalBtn}>ADD GOALS</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  addGoalBtn: {
    backgroundColor: 'green',
    color: 'white',
    fontSize: 20,
    fontFamily: 'Serif',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '50%',
    borderRadius: 10,
    height: 40,
    padding: 5,
  },
  bgImg: {
    height: '60%',
    marginTop: 70,
    width: '100%',
  },
  btnArea: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
  },
  infoText: {
    marginBottom: 20,
    fontSize: 20,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
  },
});

export default MainScreen;
