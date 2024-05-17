
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


const PayMethod = ({icon = home ,text, highlight , handlePress}) => {

    console.log(` highlight is  ${highlight}`)

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
        <View style={[highlight ? styles.highlight : styles.payMethod]}>

            <Image
            source={icon}
            style={{width : 33, height : 22, marginRight : 10}}
            />

            <Text>{text}</Text>

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


const CheckoutPage = () => {




    //const [test , setTest] = useState(data)



    return (
        <View style={{flex : 1, paddingHorizontal : 20}}>
            {/* <Text>Checkout</Text> */}
            <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((value, index) => {
          return <Accordion value={value} key={index} type={value.type}  Component={PayMethod}/>;
        })}
      </ScrollView>
            

            {/* <PayMethod highlight={true}/> */}
            <CTA title={"Process Order"}/>
        </View>
    )
}


const styles = StyleSheet.create({

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