import { useState } from "react"
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler"






const CategorieButton = ({label}) => {


    return ( 
        <TouchableHighlight 
        onPress={() => console.log("he")}
        style={styles.categoryButton}
        activeOpacity={0.6}
        underlayColor="red"
        >
      
            <Text>{label}</Text>
      
        </TouchableHighlight>
    )

 
}




const FilterPage = () => {


    const [ list, setList] = useState(['vegan', 'Asian', 'Pizza', 'Gourment', 'Mexican', 'Soup'])




    const displayButtons = list.map((item) => {


        return <CategorieButton label={item}/>
    })

    return (
    <View style={styles.filterHeight}>

        
        <View style={styles.header}>
            <Text>Filter</Text>
            <Text>Reset</Text>
        </View>

        <View style ={styles.categoriesContainer}>
            <Text>Categories</Text>

            

            <View style={{flex : 1, flexDirection : 'row', flexWrap : 'wrap'}}>
                {displayButtons}
            </View>

           
        </View>

        <View style={styles.priceRange}>
            <Text>Price Range</Text>

        </View>


    </View>
    )

}





const styles = StyleSheet.create({

    header : {
        flex : 1,

        flexDirection : 'row',
        justifyContent : 'space-between',
        borderBottomWidth : 1,
        borderBottomColor : 'grey',
        height : 100,
    },
    filterHeight : {
        height : '100%'
    },
    categoriesContainer : {
        flex : 3
    },
    categoryButton : {
        borderRadius : 16,
        borderWidth : 1,
        borderColor: '#CDCDCD',
        alignSelf : 'center',
        //backgroundColor :'blue',
        //height : 200
        paddingHorizontal : 20,
        paddingVertical : 10,
        marginRight : 10,
        marginBottom : 10
       // minWidth: 70
    },
    priceRange : {
        flex : 6,

    }

    // button: {
    //     borderRadius: 8,
    //     backgroundColor: '#007AFF',
    //     paddingVertical: 10,
    //     paddingHorizontal: 20,
    //     alignSelf: 'center',
    // },
    // container: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // text: {
    //     color: '#FFFFFF',
    //     textAlign: 'center',
    // },
})

export default FilterPage