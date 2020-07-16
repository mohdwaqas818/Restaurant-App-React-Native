import React from 'react';
import {View, Text, StyleSheet, FlatList, Image, ScrollView,TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

const ResultsList = ({title, price, navigation}) => {
	if(!price.length){
		return null;
	}
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
							<TouchableOpacity onPress={() => navigation.navigate('SeperateScreen', { id: item.id })} >
								<Image style={styles.imageStyle} source = {{uri: item.image_url}} />
								<Text style={styles.titleStyle}>{item.name}</Text>
								<Text style={styles.phoneStyle}>Phone: {item.phone}</Text>
								<Text>Review Count: {item.review_count},  Rating: {item.rating}</Text>
								<Text>{item.price}</Text>
							</TouchableOpacity>
						</View>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	contactStyle: {
		borderWidth: 2,
		borderColor: '#1F6097',
		padding: 20,
		margin: 10,
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
		backgroundColor: '#1A9A8C',
		color: 'white',
		padding: 10,
	},

	imageStyle: {
		width: 250,
		height: 120,
		borderRadius: 4,
	},

});

export default withNavigation(ResultsList);