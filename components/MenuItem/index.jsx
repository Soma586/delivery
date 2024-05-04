import { View, Image, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import CustomText from '../CustomText'




const MenuItem = ({title= "Dish name", image, detail="lorem ipsum", price="14.90"}) => {



    return (
        <View style={styles.test}>
        <View style={styles.menuContainer}> 

        <View>
            <Image
            style={styles.menuImage}
            source={require('../../assets/burger.webp')}
            />
</View>

            <View style={styles.menuContent} >

                <View style={{flex : 1, justifyContent : 'space-around'}}>

                
                {/* <Text>{title}</Text> */}
                <CustomText text={title} font="sans" size={17}/>
                
                <CustomText text={detail} font="sans" size={13}/>
               

                <CustomText text={ `$ ${price}`} font="ssBold" size={17}/>
                
                </View>

            </View>

            <View style={styles.menuIcon}>
                <AntDesign name={'pluscircle'} color={"purple"} size={30}/>
            </View>

        </View>
        </View>
    )
}



const styles = StyleSheet.create({

    menuImage : {
        width : 100,
        height : 100,
        borderRadius : 10,
    },
    test : {
        height : 130,
        paddingTop : 10,
        paddingBottom : 10,
        //borderColor : 'red',
        //borderWidth : 1,
        borderBottomWidth : 1,
        borderBottomColor : 'grey',
       
        //padding :
    },
    menuContent : {
        marginLeft : 16
    },
    menuContainer : {
         flex : 1,
        flexDirection : 'row', 
        position : 'relative',
        height: 100
        // width : '100%',
        //padding : 100,
        //backgroundColor : "red"
        //width: 300
    },
    menuIcon : {
        position : 'absolute',
        right : 0,
        bottom : 0,
    }

})


export default MenuItem