import { View , SafeAreaView} from 'react-native';
import React from 'react';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import CreateGoals from './createGoals';
import GoalsInfo from './GoalsInfo';
import GoalsProfile from './goalsProfile';


const GoalsMain = (props) => {

  return (
    <SafeAreaView> 
      <View style={styles.container}>
       <GoalsProfile/>  
       <CreateGoals/>
       {/* <GoalsInfo/> */}
      </View>
    </SafeAreaView>
  );
};

export default GoalsMain;
