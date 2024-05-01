import { useState } from "react"
import { View, Text, StyleSheet, Image, TextInput } from "react-native"
import CTA from "../../components/CTA"





export const Input = ({label, placeholder, handleChange}) => {



    return (
        <View>
            <Text style={styles.inputLabel}>{label}</Text>


            <TextInput
            style={styles.inputText}
            placeholder={placeholder}
            borderWidth={2}
            />

        </View>
    )
}

const SignIn = () => {





    return (

        <View>
            <Image
            //source={require('../../assets/background.png')}
            style={styles.signInPic}
            source={require('../../assets/background.png')}
            
            />


            <View style={styles.signContainer}>
            <Text style={styles.welcome}>Hello again!</Text>



            <Input label="Email" placeholder={"Enter your Email"}/>


            <Input label="Password" placeholder={"Enter your password"}/>



            <CTA title="Login"/>
            <Text>Forgot your password?</Text>



            <Text>Don't have an account?</Text>

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
        alignItems: 'center'
    },
    welcome : {
        fontSize: 35,
        color: 'blue'
    },
    inputLabel : {
        marginBottom : 6
    },
    inputText : {

        borderColor : 'red',
        width: '100%',
        paddingLeft: 30
    },
    
})



export default SignIn