import React from "react";

import { StyleSheet, TextInput, View, TextInputProps, TouchableOpacity } from 'react-native';
import theme from "../styles/theme";

import { MaterialIcons } from '@expo/vector-icons';

export const Input = ({send, onChangeText, value}) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <TextInput
                style={styles.container}
                placeholder='Adicione uma tarefa'
                onChangeText={onChangeText}
                value={value}
            />

            <TouchableOpacity style={styles.btnInput} activeOpacity={0.9} onPress={send}>
                <MaterialIcons name="keyboard-arrow-right" size={24} color={theme.colors.gray2} />
            </TouchableOpacity>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        width: 290,
        height: 56,
        backgroundColor: theme.colors.white,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        paddingLeft: 20,
    },

    btnInput: {
        width: 56,
        height: 56,
        backgroundColor: theme.colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderLeftWidth: 1,
        borderLeftColor: theme.colors.back
    }
});