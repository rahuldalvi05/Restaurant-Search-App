import React from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';

const ResultsDetails=({ result })=>{

    return(
        <View style={styles.container }>
            <Image style={styles.imageStyle} source={{uri: result.image_url}}/>
            <Text style={styles.name}>{result.name} </Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles=StyleSheet.create({

    container:{
        marginLeft:15
    },

    imageStyle:{
        width: 350,
        height:170,
        borderRadius:6
    },
    name:{
        fontWeight:'bold'
    }
});

export default ResultsDetails;