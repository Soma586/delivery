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
import { Ionicons, AntDesign, Feather} from '@expo/vector-icons'
import { data } from "./data";

const CategoryBox = ({ label, icon }) => {
  return (
    <View style={styles.categoryBox}>
      <Image style={styles.categoryImage} source={icon} resizeMode="contain" />

     <CustomText text={label} font={"sans-light"}/>
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


  return (
   
    <View style={styles.searchContainer}>
      {/* <Text>The Best Restaurents</Text> */}

      <View style={{paddingHorizontal : 20, flex : 1, justifyContent :'space-around'}}>

        
    <View style={{paddingTop : 30}}>

        <View style={{marginBottom : 20}}>
        <Feather name='menu' size={28} style={{marginBottom : 14}} color={blue}/>
        <CustomText
        text={"The best restaurents"}
        size={27}
        font={"loraBold"}
        color={blue}
      />

        </View>
   


      <View>
      <TextInput style={styles.input} placeholder="Search" />

      <View style={styles.iconBox}>
      <AntDesign name='search1' size={20} color={blue} />
      <Pressable onPress={() => navigation.navigate('Filter')}>
            <Ionicons  name="filter" size={24} color={blue}/>
        </Pressable>
      </View>
     

      </View>

    </View>
    
      
    <View >

        <View  style={{flexDirection : 'row', justifyContent : 'space-between'}}>
        <CustomText
      text={"Categories"}
      size={19}
      font={"loraBold"}
      color={blue}
      />
      <CustomText
      text={"Show all"}
      font={"sans-regular"}
      color={blue}
      />

        </View>
     

        <View style={{marginTop : 20}}>
        <FlatList
          data={categoryList}
          renderItem={({ item }) => <CategoryBox {...item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 16 }}
        />

        </View>
     
      </View>
      </View>
   
   

      <View style={{ alignItems : 'center', flex : 1}}>
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
    //flex: 1,
    height : '100%',
    justifyContent: 'space-around',
  },
  iconBox : {
    flexDirection : 'row',
    width : "100%",
    justifyContent : 'space-between',
    position : 'absolute',
    top : 6,
    paddingHorizontal : 10
  },
  input: {
    borderColor: "lightgrey",
    borderWidth: 1,
    paddingVertical: 8,
    borderRadius: 2,
    paddingLeft : 40,
  },
  categoryBox: {
    width: 88,
    height: 106,
    borderRadius: 8,
    // borderWidth: 1,
    backgroundColor: "white",
    alignItems : 'center',
    //verticalAlign : 'center'
    paddingTop : 24
  },
  categoryImage: {
    width: 34,
    height: 34,
    marginBottom : 12
  },

  secoundColumn: {
    marginTop: 40,
  },
});

export default SearchPage;
