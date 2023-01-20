import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
  Pressable,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, forwardRef} from 'react';
import styles from '../../screens/CreateGoals/style';
import {useNavigation} from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import moment from 'moment';

const ContributionForm = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState('2016-05-15');
  const [amount, onChangeAmount] = useState('');
  const [comment, onChangeComment] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const hideDatePicker = () => {
    setOpenDate(false);
  };

  const handleConfirm = date => {
    setDate(date);
    hideDatePicker();
  };

  return (
    <View style={{marginTop: 40}}>
      <TextInput
        placeholder="Amount*"
        style={styles.inputBox}
        onChangeText={text => onChangeAmount(text)}
        value={amount}
      />
      <Text style={{paddingLeft: 20}}> *Negative decreases savings</Text>
      <View style={{marginTop: 40}}>
        <Text style={{paddingLeft: 20}}>NOTES</Text>
        <TextInput
          placeholder="enter your comment here"
          style={styles.inputBox}
          onChangeText={text => onChangeComment(text)}
          value={comment}
        />
        <View>
          <TouchableOpacity onPress={() => setOpenDate(true)}>
            <Icon name="right" />
            <TextInput
              style={styles.inputBox}
              editable={false}
              value={moment(date).format('MMM DD YYYY')}></TextInput>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={openDate}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            value={date}
          />
        </View>
      </View>
    </View>
  );
};

export default ContributionForm;
