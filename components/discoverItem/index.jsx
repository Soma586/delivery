import { TouchableHighlight, Text, StyleSheet, ImageBackground, View } from "react-native"
import { FontAwesome } from "@expo/vector-icons"



const DiscoverItem = ({restaurant, rating}) => {




    return (

        <TouchableHighlight>
            
            <ImageBackground
            source={require('../../assets/burger.webp')}
            //source={{uri : 'https://legacy.reactjs.org/logo-og.png'}}
            resizeMode="cover"
            style={styles.ItemContainer}
            //imageStyle={{borderRadius: 10}}
            >

                <View style={styles.itemDetails}>
                <Text style={styles.itemText}>
                    Smash Burgers
                </Text> 


                    <View>
                        <FontAwesome name="star" size={20} color="white"/>
                        <Text style={styles.itemText}>
                        4.5
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
        color: 'white'
    },
    itemDetails : {
       // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        //color : 'white'
        position :'absolute',
        bottom : 10,
        left : 10
    }
})

export default DiscoverItem