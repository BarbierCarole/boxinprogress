import React from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, StatusBar } from 'react-native';
import TasksContainer from './src/components/TasksEpic/TasksContainer';


import Header  from './src/components/_Shared/Header';


export default App = () => {

  return (
    
    <SafeAreaView style={styles.container}> 
      <Header/>
      <TasksContainer/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    backgroundColor: '#ffffff', 
    // paddingTop: Platform.OS ==="android" ? 25 : 0,
    // paddingBottom: Platform.OS ==="android" ? 25 : 0,
    marginTop: StatusBar.currentHeight || 0,  
    paddingLeft: 20,
    paddingRight:20,
  },

});
