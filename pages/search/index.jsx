import { useState } from "react"
import { Text, TextInput, View, StyleSheet, Image, FlatList } from "react-native"
import CustomText from "../../components/CustomText"
import pizza from '../../assets/pizza.png'
import dessert from '../../assets/dessert.png'
import carrot from '../../assets/carrot.png'
import noodles from '../../assets/noodles.png'
import taco from '../../assets/taco.png'
import tea from '../../assets/bubble-tea.png'
import burger from '../../assets/burger.png'
import DiscoverItem from "../../components/discoverItem"





const CategoryBox = ({label, icon,}) => {


    return ( 
        <View style={styles.categoryBox}>

            <Image
                style={styles.categoryImage}
                source={icon}
                resizeMode="contain"
            />

            <Text>{label}</Text>


        </View>
    )
}

const SearchPage = () => {


    const [categoryList, setCategoryList] = useState([
        {
            label : 'pizza',
            icon : pizza,
        },
        {
            label : 'burger',
            icon : burger,
        },
        {
            label : 'vegan',
            icon : carrot,
        },
        {
            label : 'chinese',
            icon : noodles,
        },
        {
            label : 'dessert',
            icon : dessert,
        },
        {
            label : 'Mexican',
            icon : taco,
        },

    ])


    const rest = [
        {
            index: 1,
            restaurant : 'Chipotle',
            rating : '4.5',
        },
        {
            index: 2,
            restaurant : 'Pizza hut',
            rating : '4.5',
        },
        {
            index: 3,
            restaurant : 'Ice Cream parlor',
            rating : '4.5',
        },
        {
            index: 4,
            restaurant : 'Burger King',
            rating : '4.5',
        },
        {
            index: 5,
            restaurant : 'Bento & Tea',
            rating : '4.5',
        },
        {
            index: 6,
            restaurant : 'Kung Fu Tea',
            rating : '4.5',
        },
        {
            index: 7,
            restaurant : 'McDonalds',
            rating : '4.5',
        },
        {
            index: 8,
            restaurant : 'Dunkin',
            rating : '4.5',
        },
        {
            index: 9,
            restaurant : 'Luna Pizza',
            rating : '4.5',
        },

    ]


    const [ list, setList] = useState(rest)

    return (
        <View style={styles.searchContainer}>
            {/* <Text>The Best Restaurents</Text> */}
            <CustomText 
            text={"The best Restaurents"} 
            size={27} 
            font={'loraBold'}
            color={'250A82'}
            />


            <TextInput
            style={styles.input}
            placeholder="search"
            />

<Text>Categories</Text>
        <View style={{height : 150}}>
            <FlatList
            data={categoryList}
            renderItem={({item}) => <CategoryBox {...item}/>}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 16 }}
            />
            </View>

            <FlatList
            data={list}
            renderItem={({item}) => <DiscoverItem {...item}/>}
            numColumns={2}
            //keyExtractor={(item) => item.key}
            //contentContainerStyle={{ gap: 16 }}
            contentContainerStyle={{gap : 10}}
      columnWrapperStyle={{gap : 20}}
            
            />

    

        </View>
    )


}




const styles = StyleSheet.create({

    searchContainer : {
        flex : 1,
    },
    input : {
        borderColor : 'black',
        borderWidth: 1,
        paddingVertical : 4,
        borderRadius : 2
    },
    categoryBox : {
        width : 88,
        height : 106,
        borderRadius : 2,
        borderWidth : 1,
        backgroundColor : 'white'
    },
    categoryImage : {
        width : 60,
        height : 80,


    },

    secoundColumn : {
        marginTop : 40
    }
})




export default SearchPage