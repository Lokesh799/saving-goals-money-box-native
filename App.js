/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {DataTable} from 'react-native-paper';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CreatGoals from './components/CreateGoals';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <CreatGoals/>
      {/* <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Favourite Food</DataTable.Title>
        <DataTable.Title>Age</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>Radhika</DataTable.Cell>
        <DataTable.Cell>Dosa</DataTable.Cell>
        <DataTable.Cell>23</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Krishna</DataTable.Cell>
        <DataTable.Cell>Uttapam</DataTable.Cell>
        <DataTable.Cell>26</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Vanshika</DataTable.Cell>
        <DataTable.Cell>Brownie</DataTable.Cell>
        <DataTable.Cell>20</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Teena</DataTable.Cell>
        <DataTable.Cell>Pizza</DataTable.Cell>
        <DataTable.Cell>24</DataTable.Cell>
      </DataTable.Row>
    </DataTable> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
   padding:30,
  },
  tableHeader:{
    backgroundColor:"#DCDCDC"
  },
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
