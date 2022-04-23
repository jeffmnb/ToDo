import React, { useState } from "react";

import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View, } from 'react-native';
import theme from "../styles/theme";

// import CheckBox from '@react-native-community/checkbox';

import { CheckBox } from 'react-native-elements';

import { MaterialCommunityIcons } from '@expo/vector-icons';


export const CardToDo = ({ title, onRemoveItem }) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (

        <View style={styles.container}>

            <TouchableOpacity style={styles.card} onPress={() => setToggleCheckBox(oldState => !oldState)}>

                <CheckBox
                    checkedColor={theme.colors.done}
                    uncheckedColor={theme.colors.purple}
                    checked={toggleCheckBox}
                    onPress={() => setToggleCheckBox(oldValue => !oldValue)}
                />

                <Text style={[toggleCheckBox ? styles.txtCardDone : styles.txtCard]}>{title}</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.areaTrash} onPress={onRemoveItem}>
                <MaterialCommunityIcons name="trash-can-outline" size={24} color={theme.colors.gray2} />
            </TouchableOpacity>

        </View>



    )
};


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: theme.colors.back,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    card: {
        width: '93%',
        height: 50,
        backgroundColor: theme.colors.back,
        flexDirection: 'row',
        left: 0,
        alignItems: 'center'
    },

    txtCard: {
        fontFamily: theme.fonts.InterMedium,
        fontSize: 14,
        color: theme.colors.gray,
        marginLeft: 16
    },

    txtCardDone: {
        fontFamily: theme.fonts.InterMedium,
        fontSize: 14,
        color: theme.colors.done,
        marginLeft: 16,
        textDecorationLine: 'line-through',
    },

    areaTrash: {
        width: 25,
        height: 25,
    }
});