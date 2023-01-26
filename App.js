import React from 'react';

import ContributionList from './app/screens/ContributionList';
import CreatGoals from './app/screens/CreateGoals';
import MainScreen from './app/screens/MainScreen';
import ContributionForm from './app/screens/ContributionList/ContributionForm';
import AddGoals from './app/screens/AddGoal/index';
import GoalsInfo from './app/screens/CreateGoals/GoalInfo';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="MainScreen" component={MainScreen} />
        <Tab.Screen name="Settings" component={CreatGoals} />
        <Tab.Screen name="contributionList" component={ContributionList} />
        <Tab.Screen name="Form" component={ContributionForm} />
        <Tab.Screen name="AddGoals" component={AddGoals} />
        {/* <Tab.Screen name="GoalsInfo" component={GoalsInfo} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
