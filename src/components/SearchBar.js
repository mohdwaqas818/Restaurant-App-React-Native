import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({change, onChange, onSubmit}) => {
    return(
        <View style = {styles.viewStyle}>
        	<Feather name = "search" style = {styles.icon}/>
            <TextInput style ={styles.textStyle}
       			placeholder = "Search"
       			value = {change}
       			onChangeText = {onChange} //can have multiple value name
       			onEndEditing = {onSubmit}
            ></TextInput>	
        </View>
    );
}

const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: '#AE95D7',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row',
		marginBottom: 10,
		color: 'white',
	},
	icon: {
		fontSize: 30,
		paddingLeft: 4,
		marginTop: 8,
		color: 'white',

	},
	textStyle: {
		flex: 1, 
		paddingLeft: 10,
	},
});

export default SearchBar;