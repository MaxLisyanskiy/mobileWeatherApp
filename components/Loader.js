import React from "react";
import {StyleSheet, Text, View} from "react-native";
import LottieView from 'lottie-react-native';
import img from '../assets/loader.json';

export default function Loader() {

    return (
        <View style={styles.container}>
            <LottieView
                // source={require("../assets/loader.json")}
                source={img}
                style={styles.animation}
                autoPlay
            />
            {/*<Text style={styles.text}>Loading...</Text>*/}
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
    animation: {
        width: 100,
        height: 100,
    },
    text: {
        fontSize: 24
    }
});
