import React from 'react';

// Importing components and screen
// import ContributionList from './app/components/ContributionList';
import ContributionList from './app/screens/ContributionList';
import CreatGoals from './app/screens/CreateGoals';
import MainScreen from './app/screens/MainScreen';
import AddGoals from './app/components/AddGoal/index';

// importing modules and library
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="MainScreen" component={MainScreen} />
        <Tab.Screen name="Settings" component={CreatGoals} />
        <Tab.Screen name="Home" component={ContributionList} />
        <Tab.Screen name="Form" component={AddGoals} />
        <Tab.Screen name="AddGoals" component={AddGoals} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
