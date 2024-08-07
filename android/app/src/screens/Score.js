import React from "react";
import {View, Text, Button} from 'react-native'


const Score = ({route, navigation})=>{

    return(
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style = {{marginBottom: 15, color: 'black', fontSize: 20}}>Score: {route.params.score}/3</Text>
        <Button title="Go back to home" onPress = {()=> {navigation.navigate("Shreyansh's Quiz")}} color="#791fe0"/>
    </View>);
}


export default Score;