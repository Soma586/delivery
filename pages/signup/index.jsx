
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Input } from '../signIn';
import CTA from '../../components/CTA';
import CustomText from '../../components/CustomText';
import { AntDesign } from '@expo/vector-icons'
import { blue, purple } from '../../utility';

const SignUp = ({navigation}) => {




    return (

        <View style={styles.signUpContainer}>


           
            <Pressable onPress={() => navigation.goBack()}>
                <AntDesign name={"arrowleft"} size={30} color={blue}/>
            </Pressable>

            <View> 
                <CustomText text={"Welcome!"} font={"loraRegular"} size={16} color={blue}/>

                <CustomText text={"Sign up"} font={"loraBold"} size={32} color={blue}/>
            </View>
       


            <View>
                <Input label={"Name"} placeholder={"Enter your name"}/>

                <Input label={"Email"} placeholder={"Enter your email"}/>


                <Input label={"Password"} placeholder={"Choose a password"} isSecure={true}/>

            </View>
      


            
            <CTA title="Create account"/>


            <View style={{flexDirection : 'row'}}>
            {/* <Text>Already have an account?</Text> */}
            <CustomText text="Already have an account? " font="sans-light"/>


            <Pressable onPress={() => navigation.goBack()}>
                {/* <Text style={{color : purple}}>Sign In</Text> */}
                <CustomText text={"Sign In"} color={purple} font={"sans-semi-bold"}/>
            </Pressable>
            </View>
            

        </View>
    )


}



const styles = StyleSheet.create({

    signUpContainer : {
        paddingHorizontal : 30,
        height : '75%',
        //flex : 1,
        paddingTop : 60,
        justifyContent : 'space-around',
       // paddingBottom : 
    }
})



export default SignUp