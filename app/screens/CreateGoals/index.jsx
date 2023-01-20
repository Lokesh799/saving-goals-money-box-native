import {View, SafeAreaView} from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import GoalsInfo from './GoalInfo';

import CreateGoals from './CreateGoals';

// import GoalProfile from './GoalsProfile';
import ProfileGoals from './ProfileGoal';

const GoalsMain = props => {
  const [goalsInfo,setGoalsinfo] = useState(false)
  console.log(goalsInfo,"here goal state");
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ProfileGoals setGoalsinfo={setGoalsinfo}/>
     {!goalsInfo && <CreateGoals  />}
      { goalsInfo &&  <GoalsInfo />}
      </View>
    </SafeAreaView>
  );
};

export default GoalsMain;
