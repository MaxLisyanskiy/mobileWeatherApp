import React, {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

function AppHeader() {
    const [text, onChangeText] = useState("");

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Искать..."
            />
        </SafeAreaView>
    );
    };

    const styles = StyleSheet.create({
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            borderRadius: 8,
            padding: 10,
        },
    });


export default AppHeader;
