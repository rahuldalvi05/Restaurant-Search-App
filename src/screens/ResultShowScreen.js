import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList,Image} from 'react-native';
import yelp from '../api/yelp';
import { set } from 'react-native-reanimated';

const ResultShowScreen = ({navigation })=>{
const id = navigation.getParam('id');
const [result, setResult]= useState(null);


const getResult= async (id)=>{
   const response= await yelp.get(`/${id}`); 
    setResult(response.data);
};

useEffect(()=>{
    getResult(id)
},[]);


if(!result){
    return null;
}
    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
            
            data={result.photos}
            keyExtractor={(photo)=>photo}
            renderItem={( {item} )=>{

                return(
                    <Image style={styles.image} source={{uri: item}}/>
                );

            }}
            />
        </View>
    );
};

const styles=StyleSheet.create({

    image:{
        width: 360,
        height: 170
    }
     
});

export default ResultShowScreen;