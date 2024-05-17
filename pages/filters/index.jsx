import _ from 'lodash'
import { useState } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import RangeSlider, { Slider } from "react-native-range-slider-expo";
import { Ionicons, FlatList } from "@expo/vector-icons";
import CTA from "../../components/CTA";
import CustomText from "../../components/CustomText";
import { blue, purple } from "../../utility";

//todo see if you can make your own slider

const grey = '#C7CAD1'

const CategorieButton = ({ label }) => {
  return (
    <TouchableHighlight
      onPress={() => console.log("he")}
      style={styles.categoryButton}
      activeOpacity={0.6}
      underlayColor="red"
    >
      {/* <Text>{label}</Text> */}
      <CustomText text={label} color={grey} font={"sans"}/>
    </TouchableHighlight>
  );
};

const OptionButton = ({ label = "Free Delivery" }) => {
  return (
    <TouchableHighlight style={styles.optionBuff}>
      <View style={styles.optionButton}>
        {/* <Text>{label}</Text> */}
        <CustomText text={label} font={"sansBold"} color={purple} size={18}/>

        <Ionicons name={"checkmark-sharp"} size={30} color={purple}/>
      </View>
    </TouchableHighlight>
  );
};

const FilterPage = () => {
  const [list, setList] = useState([
    "vegan",
    "Asian",
    "Pizza",
    "Gourment",
    "Mexican",
    "Soup",
  ]);

  const [options, setOptions] = useState([
      "Free Delivery",
      "Restaurant ticket",
      "Glutten Free"
  ])

  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const [value, setValue] = useState(0);

  const displayButtons = list.map((item) => {
    return <CategorieButton label={item} />;
  });


  const displayOptions = _.map(options, (item) => {

    return <OptionButton label={item}/>
  })

  return (
    <View style={styles.filterHeight}>
      <View style={styles.header}>
        <CustomText text={"Filters"} size={22} font={"lora"} color={blue}/>

        <View style={{flexDirection : 'row', alignItems : 'center'}}>
            <Ionicons name="refresh" size={16}/>
        <CustomText text={"Reset"} size={18} font={"sans"}/>
        </View>
       
       
      </View>

      <View style={styles.categoriesContainer}>
        
        <CustomText text={"Categories"} font={"sansBold"} color={grey}/>

        <View style={{flexDirection: "row", flexWrap: "wrap" }}>
          {displayButtons}
        </View>
      </View>

      <View style={styles.priceRange}>
        
        <CustomText text={"Price Range"} font={"sansBold"} color={grey}/>
       
        <Slider
          min={0}
          max={140}
          step={4}
          valueOnChange={(value) => setValue(value)}
          initialValue={12}
          knobColor="red"
          //valueLabelsBackgroundColor='black'
          inRangeBarColor="purple"
          outOfRangeBarColor="orange"
        />
      </View>

      <View style={styles.option}>
       
        <CustomText text={"options"} font={"sansBolrd"} color={grey}/>

        
        {displayOptions}
      </View>

      <View>
        <CTA title={"Search"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    //flex: 1,

    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
   // height: 100,
  },
  filterHeight: {
    //height: "100%",
    paddingHorizontal : 20,
    flex: 1,
    justifyContent : 'space-around'
  },
  categoriesContainer: {
    //flex: 3,
  },
  categoryButton: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#CDCDCD",
    alignSelf: "center",
    //backgroundColor :'blue',
    //height : 200
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    marginBottom: 10,
    // minWidth: 70
  },
  priceRange: {
    //flex: 6,
    //marginBottom : 80
    paddingBottom : 100
  },
  option: {
    //flex: 6,
    height : 300
  },
  optionBuff: {
    //height: 200,
    
  },
  optionButton: {
    //flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    borderTopWidth : 0.5,
    borderTopColor : 'grey',
    borderBottomWidth : 0.5,
    borderBottomColor : 'grey',
    paddingVertical : 16,
    alignItems : 'center'
  },

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
});

export default FilterPage;
