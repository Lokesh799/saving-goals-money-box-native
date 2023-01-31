import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProgressBar, MD3Colors } from 'react-native-paper';

const ProfileGoals = () => {
  const navigation = useNavigation();
  const [goalsList, setGoalsList] = useState([]);
  const isFocused = useIsFocused();
  const findGoal = async () => {
    result = await AsyncStorage.getItem('goals');
    setGoalsList(JSON.parse(result));
  };
  useEffect(() => {
    findGoal();
    getGoalDetails();
  }, [isFocused]);

  const deleteGoal = async index => {
    const tempData = goalsList;
    const selectedData = tempData.filter((item, i) => {
      return i !== index;
    });
    setGoalsList(selectedData);
    await AsyncStorage.setItem('goals', JSON.stringify(selectedData));
  };

  const getGoalDetails = async () => {
    try {
      const savedgoal = await AsyncStorage.getItem('contribution');
      const goals = JSON.parse(savedgoal);
      let totalInstallment = 0;
      goals.map((inst, index) => {
        if (inst.title == goals[index].title) {
          totalInstallment = parseInt(totalInstallment) + parseInt(inst.amount);
        }
      })
      goalsList.map((value, index) => {
        goalsList[index].percent = parseInt(totalInstallment) / parseInt(value.amount) * 100;
        goalsList[index].totalInstallment = totalInstallment;
        goalsList[index].percentbar = goalsList[index].percent / 100;
        setGoalsList([...goalsList]);
      })
      console.log(goalsList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <FlatList
        data={goalsList}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.boxContainer}>
              <TouchableOpacity
                onPress={() => {
                  if (goalsList[index])
                    navigation.navigate('GoalsInfo', {
                      title: goalsList[index],
                    });
                  else console.log('Do not have ID');
                }}>
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
                      style={{ textAlign: 'center', justifyContent: 'center' }}
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
                    <Text
                      style={{ fontWeight: '700', color: '#000', fontSize: 20 }}>
                      {item.title}
                    </Text>
                    <Text>by {item.date}</Text>
                    <Text>{item.amount}</Text>
                  </View>
                  <TouchableOpacity onPress={() => deleteGoal(index)}>
                    <Icons name="delete" color="red" size={25} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <View style={{ width: '90%', marginBottom: 30, marginLeft: 15 }}>
                <ProgressBar progress={item.percentbar} color={MD3Colors.error70} />
                <Text>( Amount : {item.totalInstallment}) - {item.percent}%</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ProfileGoals;
