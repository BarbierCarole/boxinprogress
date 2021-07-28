import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Counter = ({nb, title}) => {
    
    return (
        <View>
            <Text> {nb} </Text>
            <Text> {title} </Text> 
        </View>
    )
}
export default Counter;