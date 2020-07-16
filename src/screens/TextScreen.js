import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet,TextInput, ScrollView} from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from '../api/yelp';
import ResultsList from '../components/ResultsList';

const TextScreen = () => {
    const [state, onState] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const filterResultByPrice = (price) => {
        //price === $ || $$ || $$$
        return results.filter(result => {
            return result.price === price;
        });
    };

    const searchApi = async searchTerm => {
        try{
            const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: state,
                location: 'Sydney'
            }
        });
        setResults(response.data.businesses);
        console.log(response.data.businesses);
        }
        catch(err){
            setErrorMessage('Content not found');
        }
    };

    //badCode
    //searchApi('pasta');
    //good code
    useEffect(() => {
      searchApi('burger');
    },[])

    return(
        <View style={styles.viewStyle}>
            <SearchBar 
                change = {state} 
                onChange = {(newValue) => onState(newValue)}
                onSubmit = {() => searchApi()}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text style={styles.resultStyle}>We have found {results.length} results</Text>
            <ScrollView>
                <ResultsList price={filterResultByPrice('$')} title="Cost Effective" />
                <ResultsList price={filterResultByPrice('$$')} title="Low Spender" />
                <ResultsList price={filterResultByPrice('$$$')} title="Big Spender" />
                <ResultsList price={filterResultByPrice('$$$$')} title="Ultra Spender" />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        backgroundColor: '#DBFAF2',
    },

    resultStyle: {
        marginBottom: 10,
        marginLeft: 15,
    },
});

export default TextScreen;