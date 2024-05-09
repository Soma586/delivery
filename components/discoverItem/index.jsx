import { TouchableHighlight, Text, StyleSheet, ImageBackground, View } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import CustomText from "../CustomText"



const DiscoverItem = ({restaurant ="mash Burgers", rating ="4.5", index }) => {




    return (

        <TouchableHighlight style={index % 2 !== 0 ? styles.secondColumn : null}>
            
            <ImageBackground
            source={require('../../assets/burger.webp')}
            //source={{uri : 'https://legacy.reactjs.org/logo-og.png'}}
            resizeMode="cover"
            style={styles.ItemContainer}
            //imageStyle={{borderRadius: 10}}
            >

                <View style={styles.itemDetails}>
                <Text style={styles.itemText}>
                    {/* {restaurant} */}
                    <CustomText text={restaurant} font={"sans"} size={17} color="white"/>
                </Text> 


                    <View>
                        <FontAwesome name="star" size={20} color="white"/>
                        <Text style={styles.itemText}>
                            <CustomText text={rating} size={12} color="white" font="sans"/>
                        </Text>
                    </View>
              
                </View>

          </ImageBackground>
           
        </TouchableHighlight>
    )


}


const styles = StyleSheet.create({

    ItemContainer : {
        height : 219,
        width: 155,
        position : 'relative',
        borderRadius : 10,
        overflow: 'hidden'

    },
    itemText : {
        color: 'white',
        fontFamily : 'open'
    },
    itemDetails : {
       // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        //color : 'white'
        position :'absolute',
        bottom : 10,
        left : 10
    },
    secoundColumn : {
        marginTop : 30
    }

})

export default DiscoverItem