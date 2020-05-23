import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import { withNavigation } from 'react-navigation';
 
const SearchScreen=()=>{

    const[term,setTerm]=useState('');
    const[searchAPI, results,errMsg]=useResults();

    const filterResultsByPrice=(price)=>{
        // price=== "$" ,"$$","$$$"
        
        return results.filter ( result=>{
                return result.price===price;
            }
         );
    };
    
    return(
        <View style={{ flex: 1}}>
            <SearchBar 
            term={term} 
            onTermChange={(newTerm)=>setTerm(newTerm)}
            onTermSubmit={()=> searchAPI(term)}
            //onTermSubmit={searchAPI}
            />
            {errMsg ? <Text>{errMsg}</Text> : null }
            

            <ScrollView>

            <ResultsList
            results={filterResultsByPrice('$')}
            title="Cost Effective"
            
            />
            <ResultsList
            results={filterResultsByPrice('$$')}
            title="Bit Pricier"
          
            />
            <ResultsList
            results={filterResultsByPrice('$$$')}
            title="Big Spender"
            
            />
            </ScrollView>
        </View>
    );
};

const styles=StyleSheet.create({

    container:{
        //marginLeft: 10
    }
});

export default SearchScreen;