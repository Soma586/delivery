import { View, Animated, Image, Text, StyleSheet, ActivityIndicator } from 'react-native'
import packageItem from '../../assets/package.png'
import CustomText from '../../components/CustomText'
import CTA from '../../components/CTA'
import { useState, useEffect, useRef } from 'react'




const FadeInView = props => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
    const translateYAnim = useRef(new Animated.Value(20)).current;

    useEffect(() => {
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.timing(translateYAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]).start();
      }, [fadeAnim, translateYAnim]);
  
    return (
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim, // Bind opacity to animated value
          transform: [{ translateY: translateYAnim }], // Bind translateY to animated value
        }}>
        {props.children}
      </Animated.View>
    );
  };

const Success = () => {



    const [ loading, setLoading] = useState(true)

    useEffect( () => {

        setTimeout(() => {

            setLoading(false)





        }, 2000)

    }, [])

    

    return (
        <View style={styles.container}>

        {loading ? (

            <View>
                <ActivityIndicator size="large"/>  

                <Text>Processing...</Text>
            </View>

        ): 
        <FadeInView>
        <View>
            

            <View style={{alignItems : 'center'}}>
            <Image
            source={packageItem}
            />
                <CustomText text={"Order was Successful"} size={28} font={"loraBold"}/>

                <CustomText text={"Check the status of your order in the Orders Section"} size={16} font={"sans"}/>
            </View>
           

            <CTA title={"Continue Shopping"} />
        </View>
        </FadeInView>

        }
        </View>

    )

}




const styles = StyleSheet.create({

    container : {
        paddingHorizontal : 20,
        //flex : 1,
        paddingTop : 150,
        justifyContent :  'space-around',
        alignItems : 'center'

    }

    })



export default Success