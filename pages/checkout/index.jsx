
//import { View, Text} from 'react-native'
import CustomText from '../../components/CustomText'

import { StyleSheet, Text,View, Image, Button, SafeAreaView, ScrollView , TouchableWithoutFeedback} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useState } from 'react';
import data from './data';
import Accordion from './accordion';
import paypal from '../../assets/paypal.png'
import home from '../../assets/home.png'
import CTA from '../../components/CTA';
import { blue } from '../../utility';
import { AntDesign } from '@expo/vector-icons';


const PayMethod = ({icon = home ,text, highlight , handlePress}) => {

    console.log(` highlight is  ${highlight}`)

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
        <View style={[highlight ? styles.highlight : styles.payMethod]}>

            <Image
            source={icon}
            style={{width : 33, height : 22, marginRight : 10}}
            resizeMode="contain"
            />

           <CustomText text={text} font={"sans-regular"} color={blue}/>

        </View>
        </TouchableWithoutFeedback>
    )
}



const DeliveryAddress = () => {


    return (
        <View>
            <Text>
            138 Colonial Ave.
            </Text>
            <Text>
            Land O Lakes, FL 34639
            </Text>

        </View>
    )
}


const CheckoutPage = ({navigation}) => {




    //const [test , setTest] = useState(data)



    return (
        <View style={{height : "100%", paddingTop : 40, paddingBottom : 40}}>

       
        <View style={styles.checkoutContainer}>
            {/* <Text>Checkout</Text> */}
          
            {/* <ScrollView style={{height : 100}} showsVerticalScrollIndicator={false}> */}
            <View>
            <AntDesign style={{marginBottom : 20}} name="arrowleft" size={30}/>
            <CustomText text="Checkout" font="loraBold" size={27} color={blue}/>
            </View>
          
            <View>
          
                <ScrollView style={{height : 500,}}>
            {data.map((value, index) => {
          return <Accordion value={value} key={index} index={index} type={value.type}  Component={PayMethod}/>;
        })}
            </ScrollView>
            </View>
  
      {/* </ScrollView> */}
            

            {/* <PayMethod highlight={true}/> */}
            <CTA title={"Process Order"}  handlePress={() => navigation.navigate("Success")}/>
        </View>
        </View>
    )
}


const styles = StyleSheet.create({

    checkoutContainer : {
        paddingHorizontal : 20,
        height : '100%',
        justifyContent : 'space-around'
    },
    payMethod : {
        flexDirection : 'row',
        padding : 20,
        alignItems : 'center',
        borderWidth : 0.2,
        borderColor : 'grey',
        marginBottom : 12
        
    },
    highlight : {
        borderWidth: 2,
        borderColor : 'purple',
        flexDirection : 'row',
        padding : 20,
        alignItems : 'center',
        
        marginBottom : 12
    }
})

export default CheckoutPage