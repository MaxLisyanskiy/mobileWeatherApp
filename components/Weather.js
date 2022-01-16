import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Weather({weatherData}) {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.text}>{weatherData.name}</Text>
            </View>
            <View style={styles.top}>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },
    top: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24
    }
});