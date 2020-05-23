import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default()=>{

    const[results, setResults]=useState([]);
    const[errMsg,SetErrMsg]=useState('');
    
    const searchAPI= async (searchTerm)=>{

        try{
            const response= await yelp.get('/search',{
                params:{
                    limit:50,
                    term: searchTerm,
                    location: 'san jose'
                }
            }
           
            );
    
            setResults(response.data.businesses)     

        }
        catch (err){

            SetErrMsg('Something went wrong')
        }
        
    }


    useEffect(()=>{

       // searchAPI('pasta');

    },[]);

    return [searchAPI, results, errMsg];
};