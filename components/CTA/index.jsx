import { View, Text, Button, StyleSheet, TouchableHighlight } from "react-native"
import CustomText from "../CustomText"



const CTA = ({title}) => {




    return (
      <TouchableHighlight>
          <View style={styles.button}>
              <CustomText text={title} font="loraBold" size={18}/>
          </View>

      </TouchableHighlight>

       

    )

}


const styles = StyleSheet.create({

    button : {
        padding: 10,
        //color : 'white',
        backgroundColor : '#6555FF',
        width: '100%',
        alignItems: 'center'
        //backgroundColor : 'red'
    }
})



export default CTA