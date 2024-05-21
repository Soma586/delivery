import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  ScrollView,
  Pressable,
  Touchable
} from "react-native";
import { useState } from "react";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import CustomText from "../../components/CustomText";
import Burger from "../../assets/burger.webp";
import { LinearGradient } from "expo-linear-gradient";
import MenuItem from "../../components/MenuItem";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { blue, grey, purple } from "../../utility";
console.disableYellowBox = true;

const FeatureItem = ({ dishName, price }) => {
  return (
    <View>
      <Image source={Burger} style={styles.featuredImage} />

      <CustomText text={dishName} font="sans-regular" color={blue} />
      <CustomText text={`$ ${price}`} font="sans-regular" color={grey} />
    </View>
  );
};

const RestaurantPage = (props) => {
  const {
    //restaurant,
    navigation,
  } = props;

  const { menu, pic, restaurant, coordinate, free = false } = props.route.params;

  const [featureList, setFeatureList] = useState([
    {
      dishName: "Pizza",
      price: 10.99,
    },
    {
      dishName: "Ice cream",
      price: 10.99,
    },
    {
      dishName: "ramen",
      price: 8.99,
    },
    {
      dishName: "burrito",
      price: 5.99,
    },
    {
      dishName: "sandwich",
      price: 11.5,
    },
    {
      dishName: "Rice ball",
      price: 7.11,
    },
    {
      dishName: "Rice and chicken",
      price: 10.11,
    },
    {
      dishName: "pizza",
      price: 15.99,
    },
  ]);

  const [favorite, setFavorite] = useState(false)


  const handleFavorite = () => {

    setFavorite(!favorite)
  }

  return (
    <ScrollView style={styles.test} showsVerticalScrollIndicator={false}>
      <View style={{ position: "relative" }}>
        <Image
          //source={require('../../assets/local.jpeg')}
          source={pic}
          style={{ width: Dimensions.get("window").width, height: 430 }}
          resizeMode="cover"
        />

        <LinearGradient
          colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0.7)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={{
            opacity: 0.65,
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
          }}
        />

        <Pressable style={styles.arrowleft} onPress={() => navigation.goBack()}>
        <AntDesign  name={"arrowleft"} size={30} color="white"/>
        </Pressable>

        <View style={styles.restaurantName}>

          {free && 
            <View style={styles.stamp}>
                <CustomText text={"Free delivery"} color="white" font={'sans-semi-bold'} size={12}/>
            </View>
            }
            <View style={{marginTop : 10}}>
          <CustomText
            text={restaurant}
            font={"loraBold"}
            size={40}
            color={"white"}
          />
          </View>
        </View>

        {/* <TouchableOpacity onPress={handleFavorite}>
            <Text>HOLLLLLA</Text>
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.favoriteButton} onPress={handleFavorite}>
            {favorite ? (
                <AntDesign name={'heart'} color="white" size={20} />
            ) : (
                <AntDesign name={'hearto'} color="white" size={20} />
            )}
          
        </TouchableOpacity>
      </View>

      <View style={styles.foodContainer}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center", marginTop : 5 }}>
          <EvilIcons name="location" size={20} color={'grey'} />

          <CustomText text={"lorem ipsum New Street"} font={"sans-regular"} color={blue}/>
        </View>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center", marginTop : 5 }}>
          <EvilIcons name="clock" size={20}  color={'grey'}/>

          <CustomText text={"12pm to 23pm -"} font={"sans-regular"} color={blue}/>
          <CustomText text={" Open now"} font={"sans-regular"} color={"green"}/>
        </View>

        <View>
          
        {/* <CustomText text={"Brunch and fusion food specialist"} font={"sans-regular"} color={blue}/> */}
          <TouchableHighlight
          style={styles.direction}
            onPress={() =>
              navigation.navigate({
                name: "MapPage",
                params: {
                  coordinate: coordinate,
                  name: restaurant,
                  pic: pic
                },
              })
            }
            underlayColor={purple}
          >
            <View >
              <CustomText text={"DIRECTIONS"} font="sans-semi-bold" color={blue}/>
            </View>
          </TouchableHighlight>
        </View>

                <View style={{marginBottom : 14}}>
                <CustomText
          text={"Feature Items"}
          font={"sans-semi-bold"}
          size={19}
          color={blue}
        />
                </View>
       

        {/* <FeatureItem dishName="ramen" price={"10.99"}/> */}

        <FlatList
          data={featureList}
          renderItem={({ item }) => <FeatureItem {...item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 16 }}
          //columnWrapperStyle={{gap : 20}}
        />

        {/* {featureList.map((item, index) => (
                        <View key={index} style={{ marginRight: 16 }}>
                            <FeatureItem dishName={item.dishName} price={item.price} />
                        </View>
                    ))} */}

        <View>
          {menu.map((item, index) => (
            <View key={index}>
              <MenuItem title={item.dish} price={item.price} img={item.img} id={item.id} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  foodContainer: {
    paddingHorizontal: 20,
  },
  arrowleft : {
    position : 'absolute',
    top : 60,
    left : 25,
  },
  featuredImage: {
    width: 186,
    height: 126,
    borderRadius: 8,
    marginBottom : 10
  },
  heroImage: {},
  restaurantName: {
    position: "absolute",
    bottom: 36,
    left : 25
  },
  favoriteButton: {
    backgroundColor: purple,
    alignSelf: "center",
    padding: 20,
    position: "absolute",
    borderRadius: 50,
    bottom: -25,
    right: 25,
    zIndex :10
  },
  stamp : {
    backgroundColor : purple,
    alignSelf :'flex-start',
    borderRadius : 20,
    paddingHorizontal : 20,
    paddingVertical : 4,
    //marginTop : -40

  },
  direction: {
   
    alignSelf : 'flex-start',
    marginTop : 10,
    marginBottom : 20,

borderRadius: 8,

//backgroundColor: '#007AFF',
borderWidth : 1,
borderColor : blue,

paddingVertical: 10,

paddingHorizontal: 20,

  },
});

export default RestaurantPage;
