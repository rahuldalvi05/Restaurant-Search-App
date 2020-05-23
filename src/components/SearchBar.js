import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';



const SearchBar=({ term,onTermChange, onTermSubmit })=>{

    return(
        <View style={styles.backgroundStyle}>
            <Feather name="search"
            style={styles.iconStyle}
            />
            <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder="Search"
            value={term}
            onChangeText={newTerm=>onTermChange(newTerm)}
            onEndEditing={()=>onTermSubmit()}
            />
        </View>
    );
};

const styles=StyleSheet.create({

    backgroundStyle:{
        marginTop:15,
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:10,
        marginHorizontal:15,
        flexDirection: 'row'
    },
    inputStyle:{
        fontSize:18,
        flex: 1
    },
    iconStyle:{
        fontSize:35,
        alignSelf: 'center',
        marginHorizontal:15
    }

});

export default SearchBar;