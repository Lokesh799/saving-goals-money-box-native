import React, {useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SharedHeader from '../../sharedHeader';

const AddGoals = () => {
  const [goalData, setGoalData] = useState({
    title: '',
    amount: null,
    date: '',
  });
  const [showCalendar, setShowCalendar] = useState(false);
  const navigation = useNavigation();
  const dateToshow = goalData.date
    ? 'Selected Date:- ' + goalData.date
    : 'Select Date';
  let goals = [];
  const submitHandler = async () => {
    if (goalData.title === '') {
      alert('Please fill Goal title');
      return;
    } else if (!goalData.amount) {
      alert('Please fill Goal amount');
      return;
    } else if (goalData.date === '') {
      alert('Please select Target Date');
      return;
    }
    let tempGoals = [];
    let x = JSON.parse(await AsyncStorage.getItem('goals'));
    tempGoals = x;
    tempGoals?.map(item => {
      goals.push(item);
    });
    goals.push({
      id: Math.random(),
      title: goalData.title,
      date: goalData.date,
      amount: goalData.amount,
    });
    await AsyncStorage.setItem('goals', JSON.stringify(goals));
    alert('Your Data saved successfully');
    setGoalData({title: '', amount: null, date: ''});
    navigation.navigate('Settings');
    console.log(goalData, 'goalData');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
      <SharedHeader
        title="Add Goals"
        iconLeft="close"
        navigationLeft="MainScreen"
        iconRight="check"
        submitHandler={submitHandler}
      />
      </View>
      <AntDesign name="camera" size={50} style={{marginLeft: 180}} />
      <Text style={styles.headingContainer}>TITLE OF GOAL</Text>
      <TextInput
        style={styles.input}
        onChangeText={title => setGoalData({...goalData, title: title})}
        placeholder="Enter title of goal..."
        value={goalData.title}
      />
      <Text style={styles.headingContainer}>GOAL AMOUNT</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter amount"
        onChangeText={amount => setGoalData({...goalData, amount: amount})}
        value={goalData.amount}
      />
      <Text style={styles.headingContainer}>TARGET DATE</Text>
      <TouchableOpacity
        style={{...styles.touchableContainer, borderTopWidth: 1}}
        onPress={() => setShowCalendar(!showCalendar)}>
        <Text style={styles.touchableText}>{dateToshow}</Text>
        <Text>📅</Text>
      </TouchableOpacity>
      {showCalendar && (
        <Calendar
          style={{borderRadius: 10, elevation: 4, margin: 40}}
          onDayPress={day => {
            setGoalData({...goalData, date: day.dateString});
            setShowCalendar(false);
          }}
          markedDates={{[goalData.date]: {selected: true}}}
          date={goalData.date}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    backgroundColor: 'lightgrey',
    fontSize: 15,
    marginTop: 10,
    padding: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: 500,
  },
  touchableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  touchableText: {
    color: '#212121',
    fontSize: 14,
    fontWeight: '600',
  },
  container: {
    backgroundColor: '#0d0d0d',
    flexDirection: 'row',
  },
});

export default AddGoals;
