import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState, forwardRef, useEffect, useMemo} from 'react';
import styles from '../../screens/CreateGoals/style';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {Calendar} from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SharedHeader from '../../sharedHeader';

const ContributionForm = props => {
  let id = props.route.params?.id;

  console.log('id', id);

  const navigation = useNavigation();
  const [contributionData, setContributionGoalData] = useState({
    amount: null,
    date: '',
    comment: '',
  });
  const [newData, setNewData] = useState();
  const [showCalendar, setShowCalendar] = useState(false);
  const isFocused = useIsFocused();

  const dateToshow = contributionData.date
    ? 'Selected Date:- ' + contributionData.date
    : 'Select Date';

  let contributeData = [];

  useEffect(() => {
    getUser();
    // updateUser();
  }, [isFocused]);

  // const updateUser = () => {
  //   const object =
  //     newData &&
  //     newData.find(data => {
  //       return data?.id == id;
  //     });
  //   if (id) {
  //     setContributionGoalData({
  //       id: id,
  //       amount: object?.amount,
  //       date: object?.date,
  //       comment: object?.comment,
  //     });
  //   }
  // };

  const submitHandler = async () => {
    if (contributionData.date === '') {
      alert('Please select Target Date');
      return;
    } else if (!contributionData.amount) {
      alert('Please fill Goal amount');
      return;
    }

    let contribution = [];
    let x = JSON.parse(await AsyncStorage.getItem('contribution'));
    contribution = x;
    contribution?.map(item => {
      contributeData.push(item);
    });
    // if (id) {
    //   contributeData.push({
    //     id: id,
    //     comment: contributionData.comment,
    //     date: contributionData.date,
    //     amount: contributionData.amount,
    //   });
    // }
    contributeData.push({
      id: Math.random(),
      comment: contributionData.comment,
      date: contributionData.date,
      amount: contributionData.amount,
    });
    await AsyncStorage.setItem('contribution', JSON.stringify(contributeData));
    alert('Your Data saved successfully');
    setContributionGoalData({comment: '', amount: null, date: ''});
    navigation.navigate('contributionList');
  };

  const getUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem('contribution');
      const currentUser = JSON.parse(savedUser);
      setNewData(currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{marginTop: 0}}>
      <SharedHeader
        title="Add Contribution"
        iconLeft="close"
        navigationLeft="contributionList"
        iconRight="check"
        submitHandler={submitHandler}
      />
      <View style={{top: '5%'}}>
        <Text style={{paddingLeft: 20, fontSize: 16, fontFamily: 'serif'}}>
          {' '}
          Amount
        </Text>
        <TextInput
          placeholder="Amount*"
          style={styles.inputBox}
          onChangeText={amount =>
            setContributionGoalData({...contributionData, amount: amount})
          }
          value={contributionData?.amount}
        />

        <Text style={{paddingLeft: 20, fontSize: 16, fontFamily: 'serif'}}>
          {' '}
          *Negative decreases savings
        </Text>
        <View style={{marginTop: 20}}>
          <Text style={{paddingLeft: 20, fontSize: 16, fontFamily: 'serif'}}>
            Comment
          </Text>
          <TextInput
            placeholder="enter your comment here"
            style={styles.inputBox}
            onChangeText={comment =>
              setContributionGoalData({...contributionData, comment: comment})
            }
            value={contributionData?.comment}
          />
          <Text style={{paddingLeft: 20, fontSize: 16, fontFamily: 'serif'}}>
            {' '}
            DATE
          </Text>
          <TouchableOpacity
            style={{
              ...style.touchableContainer,
              borderTopWidth: 2,
              marginTop: 10,
            }}
            onPress={() => setShowCalendar(!showCalendar)}>
            <Text style={style.touchableText}>{dateToshow}</Text>
            <Text>📅</Text>
          </TouchableOpacity>
          {showCalendar && (
            <Calendar
              style={{
                borderRadius: 10,
                elevation: 4,
                margin: 20,
                paddingRight: 20,
              }}
              onDayPress={day => {
                setContributionGoalData({
                  ...contributionData,
                  date: day.dateString,
                });
                setShowCalendar(false);
              }}
              markedDates={{[contributionData.date]: {selected: true}}}
              date={contributionData.date}
            />
          )}
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  headingContainer: {
    backgroundColor: 'lightgrey',
    fontSize: 15,
    marginTop: 0,
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
  plusbtnmain: {
    color: 'white',
    fontSize: 32,
    paddingRight: 15,
    textAlign: 'right',
    marginRight: 0,
    paddingTop: 0,
  },
});

export default ContributionForm;
