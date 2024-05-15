
//import { View, Text} from 'react-native'
import CustomText from '../../components/CustomText'

import { StyleSheet, Text,View, Button, SafeAreaView, ScrollView } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import data from './data';
import Accordion from './accordion';


// function AccordionItem({
//   isExpanded,
//   children,
//   viewKey,
//   style,
//   duration = 200,
// }) {
//   const height = useSharedValue(0);

//   const derivedHeight = useDerivedValue(() =>
//     withTiming(height.value * Number(isExpanded.value), {
//       duration,
//     })
//   );
//   const bodyStyle = useAnimatedStyle(() => ({
//     height: derivedHeight.value,
//   }));

//   return (
//     <Animated.View
//       key={`accordionItem_${viewKey}`}
//       style={[styles.animatedView, bodyStyle, style]}>
//       <View
//         onLayout={(e) => {
//           height.value = e.nativeEvent.layout.height;
//         }}
//         style={styles.wrapper}>
//         {children}
//       </View>
//     </Animated.View>
//   );
// }

// function Item() {
//   return <View style={styles.box} />;
// }

// function Parent({ open }) {
//   return (
//     <View style={styles.parent}>
//       <AccordionItem isExpanded={open} viewKey="Accordion">
//         <Item />
//       </AccordionItem>
//     </View>
//   );
// }

// function Appz() {
//   const open = useSharedValue(false);
//   const onPress = () => {
//     open.value = !open.value;
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.buttonContainer}>
//         <Button onPress={onPress} title="Click me" />
//       </View>

//       <View style={styles.content}>
//       <View style={styles.welcomeContainer}>
//           <Text>Welcome</Text>
//         </View>
//         <Parent open={open} />
//       </View>
    
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //justifyContent: 'center',
//     //paddingTop: 24,
//   },
//   buttonContainer: {
//     flex: 1,
//     // paddingBottom: '1rem',
//     // display: 'flex',
//     // flexDirection: 'row',
//     // justifyContent: 'center',
//     // alignItems: 'center',
//   },
//   content: {
//     // flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     // borderWidth : 1,
//     // borderColor : 'red'
//   },
//   parent: {
//     //width: 200,
//     borderWidth : 1,
//     borderColor : 'red',
//     overflow : 'hidden'
//   },
//   welcomeContainer: {
//     marginBottom: 20,
//   },
//   wrapper: {
//     width: '100%',
//     position: 'absolute',
//     display: 'flex',
//     alignItems: 'center',
//   },
//   animatedView: {
//     width: '100%',
//     overflow: 'hidden',
//   },
//   box: {
//     height: 120,
//     width: 120,
//     color: '#f8f9ff',
//     backgroundColor: '#b58df1',
//     borderRadius: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



const CheckoutPage = () => {


    return (
        <View style={{flex : 1}}>
            {/* <Text>Checkout</Text> */}
            <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((value, index) => {
          return <Accordion value={value} key={index} type={value.type} />;
        })}
      </ScrollView>
            


        </View>
    )
}



export default CheckoutPage