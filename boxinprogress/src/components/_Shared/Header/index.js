import React from "react";
import { Text, View, StyleSheet } from "react-native";

const days=[
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
];

const months=["janvier","Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];

const Header = () => {
    const date = new Date()
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{days[date.getDay()]+" "+date.getDate() + " "+months[date.getMonth()]} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eeeeee', 
        paddingTop: 20,
        paddingBottom: 20,
        
      },
      title: {
          fontSize: 25,
          fontWeight: 'bold',
      }
    
});
export default Header;