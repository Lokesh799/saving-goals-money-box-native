import {View, Text, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import styles from './style';
import {DataTable} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import SharedHeader from '../../sharedHeader';

const GoalsInfo = props => {
  let goalInfo = props.route.params?.title;

  const navigation = useNavigation();
  return (
    <>
      <SharedHeader
        title="Goals info"
        navigationLeft="Settings"
        iconLeft="left"
        // navigationLeft="Settings"
        iconRight="filter"
      />
      <View style={styles.boxContainer}>
        <TouchableOpacity>
          <View style={styles.boxStyle}>
            <View
              style={{
                backgroundColor: '#EDEADE',
                alignContent: 'center',
                marginLeft: 20,
                width: 40,
                borderRadius: 50,
                marginBottom: 30,
              }}>
              <Icon
                name="person"
                style={{textAlign: 'center', justifyContent: 'center'}}
                color="#000"
                size={30}
              />
            </View>
            <View
              style={{
                paddingRight: '50%',
                cursor: 'pointer',
                marginBottom: 50,
              }}>
              <Text style={{fontWeight: '700', color: '#000', fontSize: 20}}>
                {goalInfo?.title}
              </Text>
              <Text>by {goalInfo?.date}</Text>
              <Text>{goalInfo?.amount}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 40}}>
        <DataTable style={{padding: 5}}>
          <Text style={styless.title}> GOAL INFO</Text>
          <Text style={{fontSize: 18, fontFamily: 'serif', marginTop: 5}}>
            Savings account
          </Text>
          <Text>_________________________________________________________</Text>
          <View style={styles.GoalsDataView}>
            <Text style={{fontSize: 14, fontFamily: 'serif'}}>
              Savings frequency
            </Text>
            <Text style={styles.GoalsDataText}>Not Planned</Text>
          </View>
          <Text>_________________________________________________________</Text>
          <View style={styles.GoalsDataView}>
            <Text
              style={{fontSize: 14, fontFamily: 'serif', fontStyle: 'bold'}}>
              Reminder time
            </Text>
            <Text style={styles.GoalsDataText}>Reminder not set</Text>
          </View>
          <Text>_________________________________________________________</Text>
        </DataTable>
        <TouchableOpacity style={styless.btnArea}>
          <Text style={styless.infoText}>
            {' '}
            Savings needed to meet the goal{' '}
          </Text>
          <Text style={styless.infoText}> Yet not Planned </Text>
          <Text
            onPress={() =>
              navigation.navigate('contributionList', {title: goalInfo.title})
            }
            style={styless.addGoalBtn}>
            Goal Contribution
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styless = StyleSheet.create({
  addGoalBtn: {
    backgroundColor: 'green',
    color: 'white',
    fontSize: 20,
    fontFamily: 'Serif',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '90%',
    borderRadius: 4,
    height: 50,
    padding: 10,
    marginTop: 100,
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
  title: {
    backgroundColor: '#C0C0C0',
    fontSize: 20,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    height: 50,
    textAlign: 'center',
    padding: 10,
  },
});
export default GoalsInfo;
