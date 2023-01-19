import React from 'react';
import {Text, View,Image,Pressable} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Icon  from 'react-native-vector-icons/MaterialIcons';


const GoalsProfile = () => {
  const navigation = useNavigation()

  return (
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
           <Icon name='person' style={{textAlign:"center",justifyContent:"center"}} color="#000" size={30}/>
            </View>
            <View style={{paddingRight: "50%",cursor:'pointer'}}>
              <Text style={{fontWeight: '700', color: '#000',fontSize:20}}>Goals</Text>
              <Text>by jan 12,2023</Text>
            </View>
          </View>
          
          <Pressable
            style={styles.button}
            onPress={()=>navigation.navigate("GoalsInfo")}>
            <Text style={{color: '#fff',cursor:'wait'}}>0.0(0.00%) of 996.0 RUB</Text>
          </Pressable>

        </View>
  );
};

export default GoalsProfile;