import React from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import ContributionList from './app/components/ContributionList';
import GoalsMain from './app/Screens/CreateGoals';
import GoalsInfo from './app/Screens/CreateGoals/GoalsInfo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

const Stack = createStackNavigator(); 
 return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>  
        <Stack.Screen name="Home" component={GoalsMain}  />
        <Stack.Screen name="GoalsInfo" component={GoalsInfo}  />
      </Stack.Navigator>
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
