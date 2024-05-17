import { View, Text, Button, StyleSheet, TouchableHighlight } from "react-native"
import CustomText from "../CustomText"



const CTA = ({title, handlePress}) => {




    return (
      <TouchableHighlight onPress={handlePress}>
          <View style={styles.button}>
              <CustomText text={title} font="loraBold" size={18} color="white"/>
          </View>

      </TouchableHighlight>

       

    )

}


const styles = StyleSheet.create({

    button : {
        //padding: 10,
        paddingVertical : 16,
        //color : 'white',
        backgroundColor : '#6555FF',
        width: '100%',
        alignItems: 'center',
        borderRadius : 5,
        //backgroundColor : 'red'
    }
})



export default CTA