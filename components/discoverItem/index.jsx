import {
  TouchableHighlight,
  Text,
  StyleSheet,
  ImageBackground,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import CustomText from "../CustomText";
import { LinearGradient } from "expo-linear-gradient";

const DiscoverItem = (props) => {
  const { navigation, pic, restaurant, rating = "4.5", index } = props;

  return (
    <TouchableHighlight
      style={index % 2 !== 0 ? styles.secondColumn : null}
      onPress={() =>
        navigation.navigate({
          name: "RestaurantPage",
          params: props,
        })
      }
    >
      <ImageBackground
        //source={require('../../assets/burger.webp')}
        source={pic}
        //source={{uri : 'https://legacy.reactjs.org/logo-og.png'}}
        resizeMode="cover"
        style={styles.ItemContainer}
        //imageStyle={{borderRadius: 10}}
      >
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

        <View style={styles.itemDetails}>
          <Text style={styles.itemText}>
            {/* {restaurant} */}
            <CustomText
              text={restaurant}
              font={"sans-semi-bold"}
              size={17}
              color="white"
            />
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome
              style={{ marginRight: 6 }}
              name="star"
              size={20}
              color="white"
            />
           
              <CustomText
                text={rating}
                size={12}
                color="white"
                font="sans-regular"
              />
            
          </View>
        </View>
      </ImageBackground>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  ItemContainer: {
    height: 219,
    width: 155,
    position: "relative",
    borderRadius: 10,
    overflow: "hidden",
  },
  itemDetails: {
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //color : 'white'
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  secoundColumn: {
    marginTop: 30,
  },
});

export default DiscoverItem;
