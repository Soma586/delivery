import { useState } from "react"
import { View, Text, StyleSheet, Image, TextInput, Pressable } from "react-native"
import CTA from "../../components/CTA"
import CustomText from "../../components/CustomText"
import { blue, purple } from "../../utility"




export const Input = ({label, placeholder, handleChange}) => {



    return (
        <View style={{marginBottom : 20}}>
            <View style={{marginBottom : 4}}>
                <CustomText text={label} font={"lora"} size={14} color={blue}/>
            </View>
            


            <TextInput
            style={styles.inputText}
            placeholder={placeholder}
            borderWidth={2}
            />

        </View>
    )
}

const SignIn = ( {navigation}) => {





    return (

        <View>
            <Image
            //source={require('../../assets/background.png')}
            style={styles.signInPic}
            source={require('../../assets/background.png')}
            
            />


            <View style={styles.signContainer}>
            {/* <Text style={styles.welcome}>Hello again!</Text> */}

            <View style={{marginBottom : 15}}>
            <CustomText text={"Hello again!"} size={35} font={"loraBold"} color={blue}/>
            </View>
           


            <Input label="Email" placeholder={"Enter your Email"}/>


            <Input label="Password" placeholder={"Enter your password"}/>



            <CTA title="Login" handlePress={() => navigation.navigate('Tab')}/>
            <Text>Forgot your password?</Text>



            <View style={{flexDirection : 'row'}}>  
                 <Text>Don't have an account?</Text>

            <Pressable onPress={() => navigation.navigate('SignUp') }>
                <Text style={{color : purple}}>
                    SignUps
                </Text>
            </Pressable>

            </View>
           

            </View>
            


        </View>
    )

}


const styles = StyleSheet.create({

    signInPic: {

        width: '100%',
        marginBottom : 20
    },
    signContainer : {

        // flex : 1,
        //alignItems: 'center'
        paddingHorizontal : 30
    },
    welcome : {
        fontSize: 35,
        color: 'blue'
    },
    inputLabel : {
        marginBottom : 6
    },
    inputText : {

        borderWidth : 0.5,
        borderColor : 'grey',
        width: '100%',
        paddingLeft: 30,
        borderRadius : 4,
        paddingVertical : 6
    },
    
})



export default SignIn