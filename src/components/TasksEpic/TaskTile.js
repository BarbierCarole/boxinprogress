import React, { useState } from "react";
import {Image, StatusBar, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const TaskTile = ({id, title, completed, onChangeStatus, onDeleteTask }) => {
    
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => onChangeStatus(id)}
        >
            <View style={styles.container}>
                
                <View style={styles.subContainer}>
                    <Image 
                        style={completed ? styles.tinyLogoCompleted : styles.tinyLogoNotDone}
                        source={completed ? require('../../../assets/icon-checked.png') : require('../../../assets/icon-bulle.png')}
                    /> 
                    <Text style={completed ? styles.titleCompleted : styles.titleNotDone}>
                        {title}
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onDeleteTask(id)}
                >
                    <Image 
                        style={styles.tinyLogo }
                        source={require('../../../assets/icon-delete.png')}
                    />  
                </TouchableOpacity>
                
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    subContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",

    },
    titleCompleted: {
        marginLeft: 30,
        color: 'lightgrey'    
    },
    titleNotDone: {
        marginLeft: 30,
        color: 'black'      
    },
    tinyLogoCompleted: {
        tintColor: '#27AE60',
        height: 20,
        width: 20,
    },
    tinyLogoNotDone: {
        tintColor: 'lightgrey',
        height: 20,
        width: 20,
    },
    
});
export default TaskTile;