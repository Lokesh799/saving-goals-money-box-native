import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
  Pressable,
  Image,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
const CreatGoals = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <View style={styles.boxStyle}>
            <View
              style={{
                backgroundColor: '#EDEADE',
                alignContent: 'center',
                marginLeft: 20,
                width: 40,
                borderRadius: 50,
              }}>
              <Image
                source={require('../../assets/person-outline.png')}
                style={{width: 20, height: 30, marginLeft: 10, marginTop: 5}}
              />
            </View>
            <View style={{paddingRight: "50%"}}>
              <Text style={{fontWeight: '700', color: '#000',fontSize:20}}>Goals</Text>
              <Text>by jan 12,2023</Text>
            </View>
          </View>

          <Pressable
            style={styles.button}
            onPress={() => {
              console.log('hello pressed');
            }}>
            <Text style={{color: '#fff'}}>Press me</Text>
          </Pressable>
        </View>

        <View style={[styles.createGoalsContainer, {marginTop: 10}]}>
          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              // marginHorizontal: '30%',
              marginTop:'20%'
            }}>
           <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
            <Image
              source={require('../../assets/plus-outline.png')}
              style={{
                width: 20,
                height: 30,
                // alignSelf: 'center',
                // justifyContent: 'center',
                display: 'flex',
              }}
              
            />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreatGoals;
