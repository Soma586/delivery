import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  FlatList,
  Pressable
} from "react-native";
import CustomText from "../../components/CustomText";
import pizza from "../../assets/pizza.png";
import dessert from "../../assets/dessert.png";
import carrot from "../../assets/carrot.png";
import noodles from "../../assets/noodles.png";
import taco from "../../assets/taco.png";
import tea from "../../assets/bubble-tea.png";
import burger from "../../assets/burger.png";
import DiscoverItem from "../../components/discoverItem";
import { blue } from "../../utility";
import { Ionicons} from '@expo/vector-icons'
import { data } from "./data";

const CategoryBox = ({ label, icon }) => {
  return (
    <View style={styles.categoryBox}>
      <Image style={styles.categoryImage} source={icon} resizeMode="contain" />

      <Text>{label}</Text>
    </View>
  );
};

const SearchPage = ({navigation}) => {
  const [categoryList, setCategoryList] = useState([
    {
      label: "pizza",
      icon: pizza,
    },
    {
      label: "burger",
      icon: burger,
    },
    {
      label: "vegan",
      icon: carrot,
    },
    {
      label: "chinese",
      icon: noodles,
    },
    {
      label: "dessert",
      icon: dessert,
    },
    {
      label: "Mexican",
      icon: taco,
    },
  ]);

  const [list, setList] = useState(data)

//   const rest = [
//     {
//       index: 1,
//       restaurant: "Chipotle",
//       rating: "4.5",
//     },
//     {
//       index: 2,
//       restaurant: "Pizza hut",
//       rating: "4.5",
//     },
//     {
//       index: 3,
//       restaurant: "Ice Cream parlor",
//       rating: "4.5",
//     },
//     {
//       index: 4,
//       restaurant: "Burger King",
//       rating: "4.5",
//     },
//     {
//       index: 5,
//       restaurant: "Bento & Tea",
//       rating: "4.5",
//     },
//     {
//       index: 6,
//       restaurant: "Kung Fu Tea",
//       rating: "4.5",
//     },
//     {
//       index: 7,
//       restaurant: "McDonalds",
//       rating: "4.5",
//     },
//     {
//       index: 8,
//       restaurant: "Dunkin",
//       rating: "4.5",
//     },
//     {
//       index: 9,
//       restaurant: "Luna Pizza",
//       rating: "4.5",
//     },
//   ];

//   const [list, setList] = useState(rest);

  return (
    <View style={styles.searchContainer}>
      {/* <Text>The Best Restaurents</Text> */}

      <View style={{paddingHorizontal : 20}}>

      <CustomText
        text={"The best Restaurents"}
        size={27}
        font={"loraBold"}
        color={blue}
      />

      <TextInput style={styles.input} placeholder="search" />


        <Pressable onPress={() => navigation.navigate('Filter')}>
            <Ionicons  name="filter" size={24}/>
        </Pressable>
      

      <CustomText
      text={"Categories"}
      size={19}
      font={"lora"}
      color={blue}
      />
      </View>
   
      <View >
        <FlatList
          data={categoryList}
          renderItem={({ item }) => <CategoryBox {...item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 16 }}
        />
      </View>

      <View style={{ alignItems : 'center'}}>
        <FlatList
          data={list}
          renderItem={({ item }) => <DiscoverItem navigation={navigation} {...item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          //keyExtractor={(item) => item.key}
          //contentContainerStyle={{ gap: 16 }}
          contentContainerStyle={{ gap: 10 }}
          columnWrapperStyle={{ gap: 20 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    //justifyContent: 'space-around',
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    paddingVertical: 4,
    borderRadius: 2,
  },
  categoryBox: {
    width: 88,
    height: 106,
    borderRadius: 8,
    // borderWidth: 1,
    backgroundColor: "white",
    alignItems : 'center'
  },
  categoryImage: {
    width: 60,
    height: 80,
  },

  secoundColumn: {
    marginTop: 40,
  },
});

export default SearchPage;
