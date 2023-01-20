import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import styles from './style';
import {DataTable} from 'react-native-paper';

const GoalsInfo = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={{marginTop: 40}}>
        <DataTable style={{padding: 5}}>
          <DataTable.Header style={{backgroundColor: '#DCDCDC'}}>
            <DataTable.Title>GOAL INFO</DataTable.Title>
          </DataTable.Header>
          <Text>Savings account</Text>
          <Text>_________________________________________________________</Text>
          <View style={styles.GoalsDataView}>
            <Text>Savings frequency</Text>
            <Text style={styles.GoalsDataText}>Not Planned</Text>
          </View>
          <Text>_________________________________________________________</Text>
          <View style={styles.GoalsDataView}>
            <Text>Reminder time</Text>
            <Text style={styles.GoalsDataText}>Reminder not set</Text>
          </View>
          <Text>_________________________________________________________</Text>
        </DataTable>
        <View>
          <Text style={styles.SavingMeet}>
            {' '}
            Savings needed to meet the goal
          </Text>
          <Text style={styles.YetPlanned}> Yet not Planned</Text>
        </View>
      </View>
      <Button
        style={styles.button}
        title="Goal Contribution"
        onPress={() => navigation.navigate('contributionList')}
      />
    </>
  );
};

export default GoalsInfo;
