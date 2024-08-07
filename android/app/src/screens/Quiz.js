import React from "react";
import { useMemo,useState, useCallback } from "react";
import {View, Text, SafeAreaView, Button, StyleSheet, TouchableOpacity} from 'react-native'
import RadioGroup from 'react-native-radio-buttons-group';


const Quiz = ({navigation})=>{

    const [score, setScore] = useState(0);
    const [index , setIndex] = useState(0);
    const [questions , setQuestion] = useState([{

        question : 'Which of the following is a supervised learning algorithm?',
        options : ['K-means clustering', 'Decision tree', 'Principal Component Analysis (PCA)', 'Apriori algorithm'],
        right: 'Decision tree'


    },
    {

        question : 'In supervised learning, the training dataset consists of:',
        options : ['Input features only', 'Output labels only', 'Input features and output labels', 'None of the above'],
        right: 'Input features and output labels'


    },
    {

        question : 'Which supervised learning algorithm is known for its ability to handle both classification and regression tasks?',
        options : ['Support Vector Machines (SVM)', 'Random Forest', 'K-nearest neighbors (KNN)', 'Linear Regression'],
        right: 'Random Forest'


    }


    ])

    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'a. '+questions[index].options[0],
            value: questions[index].options[0]
        },
        {
            id: '2',
            label: 'b. '+questions[index].options[1],
            value: questions[index].options[1]
        },
        {
            id: '3', // acts as primary key, should be unique and non-empty string
            label: 'c. '+questions[index].options[2],
            value: questions[index].options[2]
        },
        {
            id: '4',
            label: 'd. '+questions[index].options[3],
            value: questions[index].options[3]
        }
    ]), [index]);

    const [selectedId, setSelectedId] = useState();

    return(
        <SafeAreaView style = {styles.wrapper}>
            <View style = {styles.wrapper}>
                <View style = {styles.questionStyles}>
                    <Text style = {{fontSize: 20, color: 'black'}}>{questions[index].question}</Text>
                    
                </View>
                <View style = {styles.optionsStyle}>
                <RadioGroup 
                    radioButtons={radioButtons} 
                    onPress={setSelectedId}
                    selectedId={selectedId}
                    labelStyle= {{fontSize: 18, color: 'black'}}
                />
                </View>
                <View style = {styles.navButton}>
                    <TouchableOpacity style = {styles.buttonStyle}  onPress={()=>{
                       
                        const answer = questions[index].options[selectedId-1]
                        
                        if(answer == questions[index].right){
                            setScore(score + 1)
                        }

                        if(index < questions.length-1){
                            
                            setSelectedId("");
                            setIndex(index + 1);
                            
                        }
                        
                    }}>
                        <Text style = {{color: 'white'}}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonStyle} title="Previous" onPress={()=>{
                       
                        if(index > 0){
                           
                            setIndex(index - 1);
                            
                        }else{
                            setIndex(index);
                        }
                        
                    }}>
                        <Text style = {{color: 'white'}}>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonStyle}  onPress={()=>{
                       
                       navigation.navigate('Score', {score: score})
                      
                       
                   }}>
                       <Text style = {{color: 'white'}}>Submit</Text>
                   </TouchableOpacity>
                </View>
            </View>
            
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({

    wrapper: {
        flex: 1
    },
    questionStyles: {
       marginTop: 50,
       marginLeft: 20,
       marginRight: 20,
       justifyContent: 'center'
    },
    optionsStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        fontSize: 20,
        color: 'black'
    },
    navButton: {
        justifyContent: 'center',
        
        marginTop: 90
    },
    buttonStyle: {
        marginTop: 10,
        width: 200,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 90,
        marginRight: 20,
        backgroundColor: '#6345a8',
        shadowColor: 'black',
        shadowRadius: 2,
        shadowOpacity: 50,
        borderRadius: 5
       
    }
})


export default Quiz;