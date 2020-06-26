import React, {useState, useEffect} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button,
    FlatList,
    Image
}from 'react-native';

import yelp from '../api/yelp';


const ResultsShowScreen = ({route,navigation}) => {
    const [result,setResult] = useState(null)
    const { ID } = route.params
  //  console.log(ID);
    //console.log(result);
    


const getResult = async (id) =>{
        let response = await yelp.get(`/${ID}`)
          setResult(response.data)
        };
        useEffect(() => {
            getResult(ID)
        },[])

  if(!result){
      return null
  }
    

    return(
       
        <FlatList
            data = {result.photos}
            keyExtractor = {(photo) => {photo}}
            renderItem ={({item}) => {
                return <Image source = {{uri : item}}  style = {styles.imageDataStyle} />
            }}
        />
    )

    }


const styles = StyleSheet.create({
    imageDataStyle: {
        width:280,
        height:150,
        margin:15
    }

})

export default ResultsShowScreen