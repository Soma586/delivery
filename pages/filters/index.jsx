import _ from "lodash";
import { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  Animated,
  Pressable
} from "react-native";
//import RangeSlider, { Slider } from "react-native-range-slider-expo";
import { Ionicons, FlatList } from "@expo/vector-icons";
import CTA from "../../components/CTA";
import CustomText from "../../components/CustomText";
import { blue, purple } from "../../utility";
import Slider from "@react-native-community/slider";
//todo see if you can make your own slider

const grey = "#C7CAD1";

const CategorieButton = ({ label, handlePress , active}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.categoryButton,active && {backgroundColor : purple, borderColor : purple} ]}
      activeOpacity={0.6}
      //underlayColor="red"
    >
      {/* <Text>{label}</Text> */}
      <CustomText text={label} color={active ? "white" : grey} font={"sans-regular"} />
    </TouchableOpacity>
  );
};

const OptionButton = ({ label = "Free Delivery", handlePress, index, active }) => {
  return (
    <TouchableOpacity style={styles.optionBuff} onPress={handlePress}>
      <View style={[ index%2 === 0 ? styles.optionButton : styles.optionButtonOdd]}>
        {/* <Text>{label}</Text> */}
        <CustomText
          text={label}
          font={"sans-regular"}
          color={active ? purple : 'black'}
          size={18}
        />

        { active &&
        <Ionicons name={"checkmark-sharp"} size={22} color={purple} />
        }
      </View>
    </TouchableOpacity>
  );
};

const FilterPage = () => {
  const [list, setList] = useState([
    { label : "Gourment",
      active : false,
    },
    {label : "vegan",
     active : false,
    },
     { label : "Asian",
        active : false,
    },
     { label : "Pizza",
        active : false,
    },{
        label : "Mexican",
        active : false,
    },{
        label : "Soup",
        active : false
    }
  ]);

  const [options, setOptions] = useState([
      {
        label : "Free Delivery",
        active : false
      },{
        label : "Restaurant ticket",
        active : false
      },
      {
        label : "Glutten Free",
        active : false

      }  
  ]);

  const [value, setValue] = useState(0);

  const animatedValue = useRef(new Animated.Value(0)).current;
  const [layoutWidth, setLayoutWidth] = useState(0);

  const onValueChange = (value) => {
    setValue(value);
    animatedValue.setValue(value);
  };


  const handleCategories = (index) => {

    let copy = [...list]

    copy[index].active = !copy[index].active

    setList(copy)

  }

  const handleOptions = (index) => {

    let copy = [...options]

    copy[index].active = !copy[index].active

    setOptions(copy)

  }

  const handleReset = () => {

    

    const categories = [...list]
    const resetOptions = [...options]


    categories.forEach((item) => {
        item.active = false
    })

    resetOptions.forEach((item) => {
        item.active = false
    })

    setValue(0)
    setList(categories)
    setOptions(resetOptions)
    animatedValue.setValue(0)


  }

  const displayButtons = list.map((item, index) => {
    return <CategorieButton key={index} label={item.label} handlePress={() => handleCategories(index)}  active={item.active}/>;
  });

  const displayOptions = _.map(options, (item ,index) => {
    return <OptionButton key={index} label={item.label}  index={index} handlePress={() => handleOptions(index)} active={item.active}/>;
  });

  return (
    <View style={styles.filterHeight}>
      <View style={styles.header}>
        <CustomText text={"Filters"} size={22} font={"loraBold"} color={blue} />

        <Pressable onPress={handleReset}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="refresh" size={16} />
          <CustomText
            text={"Reset"}
            size={18}
            font={"sans-light"}
            color={blue}
          />
        </View>
        </Pressable>
      </View>

      <View style={styles.categoriesContainer}>
        <CustomText
          text={"C A T E G O R I E S"}
          font={"sans-bold"}
          color={grey}
        />

        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {displayButtons}
        </View>
      </View>

      <View style={styles.priceRange}>
        <CustomText
          text={"P R I C E R A N G E"}
          font={"sans-bold"}
          color={grey}
        />

        <View>
          <View
            style={styles.sliderContainer}
            onLayout={(event) => setLayoutWidth(event.nativeEvent.layout.width)}
          >
            <Animated.View
              style={[
                styles.valueContainer,
                {
                  left: animatedValue.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, layoutWidth - 25], // 40 is an approximate width of the value container
                    extrapolate: "clamp",
                  }),
                },
              ]}
            >
              {/* <Text style={styles.valueText}>{Math.floor(value)}</Text> */}
              <View style={{ width: 60 }}>
                <CustomText
                  text={`$${Math.floor(value)}.00`}
                  font={"sans-light"}
                  size={18}
                />
              </View>
            </Animated.View>

            <Slider
              style={{ height: 40 }}
              onValueChange={onValueChange}
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor={purple}
              maximumTrackTintColor="lightgrey"
              thumbTintColor={purple}
              value={value}
            />
          </View>
        </View>
      </View>

      <View style={styles.option}>
          <View style={{marginBottom : 20}}>
             <CustomText text={"O P T I O N S"} font={"sans-bold"} color={grey} />
          </View>


        {displayOptions}
      </View>

      <View>
        <CTA title={"Apply"} />
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
    paddingHorizontal: 20,
    //flex: 1,
    height : "100%",
    justifyContent: "space-around",
    paddingBottom : 70
  },
  categoriesContainer: {
    //flex: 3,
  },
  categoryButton: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#CDCDCD",
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  optionButton: {
    //flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    borderTopWidth: 0.5,
    borderTopColor: "grey",
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
    paddingVertical: 16,
    alignItems: "center",
  },
  optionButtonOdd : {
    justifyContent: "space-between",
    flexDirection: "row",
    //borderTopWidth: 0.5,
    //borderTopColor: "grey",
    //borderBottomWidth: 0.5,
    //borderBottomColor: "grey",
    paddingVertical: 16,
    alignItems: "center",

  },
  sliderContainer: {
    //width: 200,
    position: "relative",
    marginTop : 40
    //height: 400,
  },
  valueContainer: {
    position: "absolute",
    top: -25,
    width: 30,
    alignItems: "center",
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
