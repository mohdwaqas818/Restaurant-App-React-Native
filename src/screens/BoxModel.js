import React, {useState} from 'react';
import {View, Text, StyleSheet,TextInput} from 'react-native';

const BoxModel = () => {
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle1}>Text 1</Text>
            <Text style={styles.textStyle2}>Text 2</Text>
            <Text style={styles.textStyle3}>Text 3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        height: 200,
        borderWidth: 3,
        borderColor: '#E75339',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textStyle1: {
        borderWidth: 3,
        borderColor: 'red',
        height: 50,
        width: 50,
    },
    textStyle2: {
        borderWidth: 3,
        borderColor: 'red',
        height: 50,
        width: 50,
        alignSelf: 'flex-end',
        padding: 5,
    },
    textStyle3: {
        borderWidth: 3,
        borderColor: 'red',
        height: 50,
        width: 50,
    },
});

export default BoxModel;