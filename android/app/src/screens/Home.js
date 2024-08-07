import React from 'react'
import {View, Text, SafeAreaView, Button, StyleSheet} from 'react-native'



const Home = ({navigation})=>{

   

    return(

        <SafeAreaView style = {styles.wrapper}>
            <Button style = {styles.buttonstyle} title='NEW QUIZ' color="#791fe0" onPress={()=>{
                navigation.navigate("Quiz")
            }}/>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
       
    },
    buttonstyle:{
        
    }

})


export default Home;