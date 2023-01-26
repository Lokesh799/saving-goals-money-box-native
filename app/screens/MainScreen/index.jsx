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
      <SharedHeader iconRight="plus" navigationRight="AddGoals" title="Goals" />
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
    fontSize: 25,
    margin: 'auto',
    textAlign: 'center',
    width: '50%',
  },
  bgImg: {
    height: '60%',
    marginTop: 100,
    width: '100%',
  },
  btnArea: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    width: '95%',
  },
  infoText: {
    marginBottom: 20,
  },
});

export default MainScreen;
