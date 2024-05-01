
import { StyleSheet, Text, View, Image } from 'react-native';
import { Input } from '../signIn';
import CTA from '../../components/CTA';


const SignUp = () => {




    return (

        <View>
            <Text>Welcome!</Text>

            <Text>Sign up</Text>

            <Input label={"Name"} placeholder={"Enter your name"}/>

            <Input label={"Email"} placeholder={"Enter your email"}/>


            <Input label={"Password"} placeholder={"Choose a password"}/>


            
            <CTA title="Create account"/>

            <Text>Already have an account?</Text>

        </View>
    )


}



export default SignUp