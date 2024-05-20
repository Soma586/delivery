import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  ScrollView,
  Pressable
} from "react-native";
import { useState } from "react";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import CustomText from "../../components/CustomText";
import Burger from "../../assets/burger.webp";
import { LinearGradient } from "expo-linear-gradient";
import MenuItem from "../../components/MenuItem";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { blue, grey, purple } from "../../utility";


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

  const { menu, pic, restaurant, coordinate } = props.route.params;

  const [featureList, setFeatureList] = useState([
    {
      dishName: "naruto",
      price: 10.99,
    },
    {
      dishName: "one piece",
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
      dishName: "pokemon",
      price: 7.11,
    },
    {
      dishName: "blue lock",
      price: 10.11,
    },
    {
      dishName: "pizza",
      price: 15.99,
    },
  ]);

  return (
    <ScrollView style={styles.test}>
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
          <CustomText
            text={restaurant}
            font={"loraBold"}
            size={40}
            color={"white"}
          />
        </View>

        <TouchableHighlight style={styles.favoriteButton}>
          <AntDesign name={"hearto"} color="white" size={20} />
        </TouchableHighlight>
      </View>

      <View style={styles.foodContainer}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <EvilIcons name="location" size={20} />

          <CustomText text={"test"} font={"sans-regular"} />
        </View>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <EvilIcons name="clock" size={20} />

          <CustomText text={"test"} font={"sans-regular"} />
        </View>

        <View>
          <Text>WHAT Up</Text>

          <TouchableHighlight
            onPress={() =>
              navigation.navigate({
                name: "MapPage",
                params: {
                  coordinate: coordinate,
                  name: restaurant,
                },
              })
            }
          >
            <View>
              <Text>DIRECTIONS</Text>
            </View>
          </TouchableHighlight>
        </View>

        <CustomText
          text={"Feature Items"}
          font={"sans-semi-bold"}
          size={19}
          color={blue}
        />

        {/* <FeatureItem dishName="ramen" price={"10.99"}/> */}

        <FlatList
          data={featureList}
          renderItem={({ item }) => <FeatureItem {...item} />}
          horizontal={true}
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
              <MenuItem title={item.dish} price={item.price} img={item.img} />
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
  },
  heroImage: {},
  restaurantName: {
    position: "absolute",
    bottom: 20,
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
  },
  test: {
    // flex: 1,
    // justifyContent : 'center',
    // alignItems : 'center',
    //paddingHorizontal : 20,
    //paddingLeft : 20,
  },
});

export default RestaurantPage;
