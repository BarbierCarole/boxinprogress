import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Counter from "../_Shared/Counter";

const CountersContainer = ({nbTasks, nbTasksCompleted}) => {
   
    return (
        <View>
            <View style={styles.container}>
                <Counter nb={nbTasks} title={'Tâches créées'} /> 
                <Counter nb={nbTasksCompleted()} title={'Tâches complétées'} />
            </View>
        </View>    
    )
}

const styles = StyleSheet.create({
    container: {

    }
});

export default CountersContainer;