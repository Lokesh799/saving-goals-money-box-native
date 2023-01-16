import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import ContributionList from './app/components/ContributionList';
import CreatGoals from './app/Screens/CreateGoals';
// import { createStackNavigator } from '@react-navigation/native-stack';
// import NavigationContainer from 'react-native-navigation-container';
// import 'react-native-gesture-handler'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
            const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  // const Stack = createStackNavigator(); 
  // const Stack = createNativeStackNavigator();
  
const Tab = createBottomTabNavigator();  
  return (
    <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name="Settings" component={CreatGoals} />
    <Tab.Screen name="Home" component={ContributionList} />
  </Tab.Navigator>
  </NavigationContainer>      
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
