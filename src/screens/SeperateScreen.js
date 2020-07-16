import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import yelp from '../api/yelp';

const SeperateScreen = ({navigation}) => {
	const[info, setInfo] = useState(null);
	const id = navigation.getParam('id');
	console.log(info);

	const getResult = async (id) => {
		const response = await yelp.get(`/${id}`);
		setInfo(response.data);
	};

	useEffect(() => {
		getResult(id);
	}, []);

	if(!info){
		return null;
	}

	return(
		<View style={styles.viewStyle}>
			<Text style={styles.name}>{info.name}</Text>
			<Text style={styles.phone}>{info.phone}</Text>
			<FlatList 
				data={info.photos}
				keyExtractor={(pic) => pic}
				renderItem={({item}) => {
					return(
						/*Using FlatList as to extract out multiple images from data*/
						<Image style={styles.image} source={{uri:item}} />
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyle:{
		flex: 1,
		backgroundColor: '#A7D7D8',
	},

	name:{
		fontSize: 20,
		backgroundColor: '#F8C88D',
		padding: 10,
		fontWeight: 'bold',
		borderWidth: 2,
		borderColor: 'black',
		marginBottom: 10,
	},

	phone: {
		fontSize: 20,
		backgroundColor: '#F8C88D',
		padding: 10,
		fontWeight: 'bold',
		borderWidth: 2,
		borderColor: 'black',
	},

	image: {
		height: 200,
		width: 300,
		margin: 10,
	},
});

export default SeperateScreen;