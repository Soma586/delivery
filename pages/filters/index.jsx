import { useState } from "react"
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native'
import RangeSlider, { Slider } from 'react-native-range-slider-expo';
import {Ionicons, FlatList} from '@expo/vector-icons'
import CTA from "../../components/CTA";



//todo see if you can make your own slider 


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



const OptionButton = ( {label ="Free Delivery"}) => {


    return (

        <TouchableHighlight style={styles.optionBuff}>
            <View style={styles.optionButton}>
            <Text>{label}</Text>

            <Ionicons name={"checkmark-sharp"} size={30}/>
            </View>
        </TouchableHighlight>
    )

}




const FilterPage = () => {


    const [ list, setList] = useState(['vegan', 'Asian', 'Pizza', 'Gourment', 'Mexican', 'Soup'])

    const [fromValue, setFromValue] = useState(0);
     const [toValue, setToValue] = useState(0);
     const [value, setValue] = useState(0);


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


           
                    <Slider min={0} max={140} step={4}
                         valueOnChange={value => setValue(value)}
                         initialValue={12}
                         knobColor='red'
                         //valueLabelsBackgroundColor='black'
                         inRangeBarColor='purple'
                         outOfRangeBarColor='orange'
                    />
        </View>

        <View style={styles.option}>
            <Text>Option</Text>

            {/* <OptionButton/> */}
            <OptionButton/>
        </View>

        <View>
            <CTA title={"Search"}/>
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

    },
    option: {
        flex : 6
    },
    optionBuff: {
        height : 200,
    },
    optionButton : {
        flex : 1,
        justifyContent : 'space-between',
        flexDirection : 'row'
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