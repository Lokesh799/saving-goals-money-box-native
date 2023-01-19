import {View, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';

const CreateGoals = () => {
  return (
    <View style={[styles.createGoalsContainer, {marginTop: 10}]}>
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: '20%',
        }}>
        <TouchableOpacity>
          <Icon
            name="plus"
            style={{textAlign: 'center', justifyContent: 'center'}}
            color="#000"
            size={30}
          />
        </TouchableOpacity>
      </View>
      <Text style={{display: 'flex', marginLeft: 160, marginTop: 10}}>
        Create Goals
      </Text>
    </View>
  );
};

export default CreateGoals;
