import { View, Text, Button, StyleSheet, TouchableHighlight } from "react-native"




const CTA = ({title}) => {




    return (
      <TouchableHighlight>
          <View style={styles.button}>
              <Text>{title}</Text>
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
        //backgroundColor : 'red'
    }
})



export default CTA