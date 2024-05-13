
import {View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableHighlight, ScrollView} from 'react-native'
import { useState } from 'react'
import { EvilIcons, AntDesign } from '@expo/vector-icons'
import CustomText from '../../components/CustomText'
import Burger from '../../assets/burger.webp'
import { LinearGradient } from 'expo-linear-gradient'
import MenuItem from '../../components/MenuItem'




const FeatureItem = ({dishName, price}) => {


    return (
        <View>
            <Image
            source={Burger}
            style={styles.featuredImage}
            />
         
            <CustomText text={dishName} font="sans"/>
            <CustomText text={price} font="sans"/>

        </View>
    )
}


const RestaurantPage = ({address ="tesing", timeSlot="12pm-4pm"}) => {


    const [featureList, setFeatureList] = useState([
        {
            dishName : "naruto",
            price : "10.99"
        },
        {
            dishName : "naruto",
            price : "10.99"
        },
        {
            dishName : "naruto",
            price : "10.99"
        },
        {
            dishName : "naruto",
            price : "10.99"
        },
        {
            dishName : "naruto",
            price : "10.99"
        },
        {
            dishName : "naruto",
            price : "10.99"
        },
        {
            dishName : "naruto",
            price : "10.99"
        },
        {
            dishName : "naruto",
            price : "10.99"
        },
    ])



    return (
        <ScrollView style={styles.test}>


            <View style={{ position : "relative"}}>
                <Image
                source={require('../../assets/local.jpeg')}
                style={{width : Dimensions.get('window').width}}
                resizeMode="cover"
                />
             
                <LinearGradient
        colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0.7)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={{
            opacity : 0.65,
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          width: '100%',
          height: '100%'
        }}
      />

                <View style={styles.restaurantName}>
                    <CustomText text={"Moka Club"} font={"loraBold"} size={40} color={"white"}/>
                </View>

            <TouchableHighlight style={styles.favoriteButton}>

                <AntDesign name={"hearto"} color="white" size={20}/>
            </TouchableHighlight>

            </View>

            <View >

                <View style={{flex : 1, flexDirection : 'row'}}>
                 
                    <EvilIcons name="location" size={20}/>
                
                    <CustomText text={address} font={'sans'}/>
                </View>
                <View style={{flex : 1, flexDirection : 'row'}}>
                 
                    <EvilIcons name="clock" size={20}/>
             
                    <CustomText text={timeSlot} font={'sans'}/>
                </View>

                <CustomText text={"Feature Items"} font={'ssBold'} size={19}/>


                {/* <FeatureItem dishName="ramen" price={"10.99"}/> */}

                <FlatList
                data={featureList}
                renderItem={({item}) => <FeatureItem {...item}/>}
                horizontal={true}
                contentContainerStyle={{gap : 16}}
                //columnWrapperStyle={{gap : 20}}
                />

{/* {featureList.map((item, index) => (
                        <View key={index} style={{ marginRight: 16 }}>
                            <FeatureItem dishName={item.dishName} price={item.price} />
                        </View>
                    ))} */}

                    <View>

                    {featureList.map((item, index) => (
                        <View>
                            <MenuItem />
                        </View>
                    ))}
                    </View>

            </View>
        </ScrollView>
    )

}




const styles = StyleSheet.create({

   featuredImage : {
       width: 186,
       height : 126,
       borderRadius : 8
   },
   heroImage : {
       
   },
   restaurantName : {
       position : 'absolute',
       bottom : 20
   },
   favoriteButton : {
       backgroundColor : 'purple',
       alignSelf : 'center',
       padding : 20,
       position : 'absolute',
       borderRadius : 50,
       bottom : -25,
       right : 0
   },
   test : {
    // flex: 1,
    // justifyContent : 'center',
    // alignItems : 'center',
    //paddingHorizontal : 20,
    //paddingLeft : 20,

   }


})

export default RestaurantPage