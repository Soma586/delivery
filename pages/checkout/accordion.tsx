import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, { Component, useState } from 'react';
//import {Category} from '../data/data';
import {Category} from './data'
import Animated, {
  useAnimatedRef,
  useSharedValue,
  useAnimatedStyle,
  runOnUI,
  measure,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import Chevron from './chevron';
import AccordionNested from './AccordionNested';
import paypal from '../../assets/paypal.png';
import mastercard from '../../assets/mastercard.jpg';
import visa from '../../assets/visa.png'
import home from '../../assets/home.png'



const Accordion = ({value, type, Component}) => {
  const listRef = useAnimatedRef();
  const heightValue = useSharedValue(0);
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withTiming(1) : withTiming(0),
  );

  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: heightValue.value,
  }));


  let newData = value.content.map((item, index) => {

    return {
      item,
      active : index === 0 ? true : false
    }
   
  })

  let map = new Map()

  map.set(0, visa)
  map.set(1, paypal)
  map.set(2, mastercard)
  const [ data, setData] = useState(newData)

  const handlePress = (index) => {

    const copy = [...data]

    console.log(copy)
    copy.forEach((item) => {
      item.active = false
    })

    copy[index].active = true

    setData(copy)

  }

  console.log(data)


  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          if (heightValue.value === 0) {
            runOnUI(() => {
              'worklet';
              heightValue.value = withTiming(measure(listRef)!.height);
            })();
          } else {
            heightValue.value = withTiming(0);
          }
          open.value = !open.value;
        }}
        style={styles.titleContainer}>
        <Text style={styles.textTitle}>{value.title}</Text>
        <Chevron progress={progress} />
      </Pressable>
      <Animated.View style={heightAnimationStyle}>
        <Animated.View style={styles.contentContainer} ref={listRef}>
          {type === 'regular' &&
            data.map((v, i) => {
              //console.log(v)
              return (
                // <View key={i} style={styles.content}>
                //   <Component text={v}/>
                //   <Text style={styles.textContent}>{v}</Text>
                // </View>
                <Component 
                key={i} 
                icon = {value.title === "Payment Method" ? map.get(i) : home}
                text={v.item}
                highlight ={v.active}
                handlePress={() => handlePress(i)}
                
                />
              );
            })}
          {type === 'nested' && (
            <>
              <View style={styles.content}>
                <Text style={styles.textContent}>{value.content}</Text>
              </View>
              {value.contentNested.map((val, ind) => {
                return (
                  <AccordionNested
                    value={val}
                    key={ind}
                    parentHeighValue={heightValue}
                  />
                );
              })}
            </>
          )}
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#E3EDFB',
    marginHorizontal: 10,
    marginVertical: 10,
    //borderRadius: 14,
    //borderWidth: 1,
    borderTopWidth : 1,
    borderBottomWidth : 1,
    borderColor: 'grey',
    overflow: 'hidden',
  },
  textTitle: {
    fontSize: 16,
    color: 'black',
  },
  titleContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainer: {
    position: 'absolute',
    width: '100%',
    top: 0,
  },
  content: {
    padding: 20,
   // backgroundColor: '#D6E1F0',
  },
  textContent: {
    fontSize: 14,
    color: 'black',
  },
});