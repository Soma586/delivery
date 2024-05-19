import _ from "lodash";
import { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Animated,
} from "react-native";
//import RangeSlider, { Slider } from "react-native-range-slider-expo";
import { Ionicons, FlatList } from "@expo/vector-icons";
import CTA from "../../components/CTA";
import CustomText from "../../components/CustomText";
import { blue, purple } from "../../utility";
import Slider from "@react-native-community/slider";
//todo see if you can make your own slider

const grey = "#C7CAD1";

const CategorieButton = ({ label }) => {
  return (
    <TouchableHighlight
      onPress={() => console.log("he")}
      style={styles.categoryButton}
      activeOpacity={0.6}
      underlayColor="red"
    >
      {/* <Text>{label}</Text> */}
      <CustomText text={label} color={grey} font={"sans-regular"} />
    </TouchableHighlight>
  );
};

const OptionButton = ({ label = "Free Delivery" }) => {
  return (
    <TouchableHighlight style={styles.optionBuff}>
      <View style={styles.optionButton}>
        {/* <Text>{label}</Text> */}
        <CustomText
          text={label}
          font={"sans-regular"}
          color={purple}
          size={18}
        />

        <Ionicons name={"checkmark-sharp"} size={30} color={purple} />
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
    "Glutten Free",
  ]);

  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const [value, setValue] = useState(0);

  const animatedValue = useRef(new Animated.Value(0)).current;
  const [layoutWidth, setLayoutWidth] = useState(0);

  const onValueChange = (value) => {
    setValue(value);
    animatedValue.setValue(value);
  };

  const displayButtons = list.map((item, index) => {
    return <CategorieButton key={index} label={item} />;
  });

  const displayOptions = _.map(options, (item ,index) => {
    return <OptionButton key={index} label={item} />;
  });

  return (
    <View style={styles.filterHeight}>
      <View style={styles.header}>
        <CustomText text={"Filters"} size={22} font={"loraBold"} color={blue} />

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="refresh" size={16} />
          <CustomText
            text={"Reset"}
            size={18}
            font={"sans-light"}
            color={blue}
          />
        </View>
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
        <CustomText text={"O P T I O N S"} font={"sans-bold"} color={grey} />

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
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "space-around",
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
    //paddingBottom : 100
  },
  option: {
    //flex: 6,
    height: 300,
  },
  optionBuff: {
    //height: 200,
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
  sliderContainer: {
    //width: 200,
    position: "relative",
    //marginTop : 30
    //height: 40,
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
