import {View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import GoalsInfo from './GoalInfo';
import CreateGoals from './CreateGoals';
import ProfileGoals from './ProfileGoal';
import SharedHeader from '../../sharedHeader';

const GoalsMain = props => {
  const [goalsInfo, setGoalsinfo] = useState(false);

  return (
    <>
      <SafeAreaView>
        <SharedHeader
          title="Goals"
          iconLeft="left"
          navigationLeft="Settings"
          iconRight="filter"
        />
        <View style={styles.container}>
          <ProfileGoals setGoalsinfo={setGoalsinfo} />
          {!goalsInfo && <CreateGoals />}
          {goalsInfo && <GoalsInfo />}
        </View>
      </SafeAreaView>
    </>
  );
};

export default GoalsMain;
