import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AddGoalsBtn from '../../components/AddGoalBtn';
const MainScreen = props => {
  return (
    <View>
      <AddGoalsBtn {...props} />
      <ImageBackground
        source={{
          uri: 'https://img.lovepik.com/free-png/20210918/lovepik-vector-archery-png-image_400178690_wh300.png',
        }}
        style={styles.bgImg}></ImageBackground>
      <TouchableOpacity
        style={styles.btnArea}
        onPress={() => {
          props.navigation.navigate('Settings');
        }}>
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
