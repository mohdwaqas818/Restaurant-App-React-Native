import React from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Button} from 'react-native';

const ResultsList = ({title,price, navigation}) => {
	return(
		<View>
			<Text style={styles.title}>{title}</Text>
			<FlatList 
				horizontal
				showsHorizontalScrollIndicator={false}
				data = {price}
				keyExtractor = {(result) => result.id}
				renderItem = {({ item }) => {
					return(
						<View style={styles.contactStyle}>
							<Image style={styles.imageStyle} source = {{uri: item.image_url}} />
							<Text style={styles.titleStyle}>{item.name}</Text>
							<Text style={styles.phoneStyle}>Phone: {item.phone}</Text>
							<Text>Review Count: {item.review_count},  Rating: {item.rating}</Text>
							<Text>{item.price}</Text>
						</View>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	contactStyle: {
		borderWidth: 1,
		borderColor: 'red',
		padding: 20,
	},

	titleStyle: {
		marginTop: 10,
		fontSize: 20,
		fontWeight: 'bold',
	},

	title: {
		marginTop: 20,
		marginBottom: 10,
		fontSize: 20,
		fontWeight: 'bold',
	},

	imageStyle: {
		width: 250,
		height: 120,
		borderRadius: 4,
	},

});

export default ResultsList;