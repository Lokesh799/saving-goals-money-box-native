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

  const submitHandler = () => {
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
    setGoalData({title: '', amount: null, date: ''});
    alert('Your Data saved successfully');
    navigation.navigate('MainScreen');
    console.log(goalData, 'goalData');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.view3}>
          <TouchableOpacity>
            <Text
              style={styles.closeContainer}
              onPress={() => {
                navigation.navigate('MainScreen');
                setGoalData({title: '', amount: null, date: ''});
              }}>
              x
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view1}>
          <Text style={styles.headertxt}> Add Goals </Text>
        </View>

        <View style={styles.view2}>
          <TouchableOpacity>
            <Text style={styles.saveContainer} onPress={submitHandler}>
              ✔️
            </Text>
          </TouchableOpacity>
        </View>
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
  borderContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
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
  targetDateContainer: {
    width: 50,
  },
  container: {
    backgroundColor: '#0d0d0d',
    flexDirection: 'row',
  },
  view1: {
    width: 235,
  },
  view2: {
    textAlign: 'right',
    width: 120,
  },
  view3: {
    width: 50,
  },
  headertxt: {
    color: 'white',
    fontSize: 28,
    paddingTop: 5,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  closeContainer: {
    color: 'white',
    fontSize: 35,
    paddingRight: 15,
    marginBottom: 6,
    textAlign: 'right',
  },
  saveContainer: {
    color: 'white',
    fontSize: 20,
    paddingRight: 15,
    paddingTop: 15,
    marginBottom: 6,
    textAlign: 'right',
  },
});

export default AddGoals;
