import { StatusBar } from 'expo-status-bar';
import { useCallback, useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Animated } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { Provider } from 'react-redux';
import { store } from './store';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from './pages/signIn/index'
import SignUp from './pages/signup';
import DiscoverItem from './components/discoverItem';
import MenuItem from './components/MenuItem';
import FilterPage from './pages/filters';
import SearchPage from './pages/search';
import RestaurantPage from './pages/restaurantPage';
import OrderPage from './pages/order';
import MapPage from './pages/mappage';
import CheckoutPage from './pages/checkout';
import Success from './pages/success';
import { Ionicons, FontAwesome5, AntDesign, Feather} from '@expo/vector-icons'
import Slider from '@react-native-community/slider';
import Map from './pages/mappage'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs()

export default function App() {




  function Test() {

    const [fromValue, setFromValue] = useState(0);
    const [toValue, setToValue] = useState(0);
    const [value, setValue] = useState(0);


    const animatedValue = useRef(new Animated.Value(0)).current;
    const [layoutWidth, setLayoutWidth] = useState(0);
  
    const onValueChange = (value) => {
      setValue(value);
      animatedValue.setValue(value);
    };

    
    return (
         <View style={styles.container}>
        

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
                extrapolate: 'clamp'
              }),
            },
          ]}
        >
          <Text style={styles.valueText}>{Math.floor(value)}</Text>
        </Animated.View>


              <Slider
  style={{width:200, height: 40}}
  onValueChange={onValueChange}
  minimumValue={0}
  maximumValue={100}
  minimumTrackTintColor="blue"
  maximumTrackTintColor="green"
  value={value}
/>
         </View>
         </View>
    );
  }

  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Thank you for checking out this App!</Text>
        <Text>Developed by Tarik Mulholland</Text>

      
      </View>
    );
  }



  const SandBox = () => {


    return (

      <View>
          <DiscoverItem/>
          <MenuItem/>


      </View>
    )
  }


  const Tab = createBottomTabNavigator()
  const Stack = createNativeStackNavigator();



  const Tabs = () => {


    return (
      <Tab.Navigator
      screenOptions={{ headerShown: false }}
      >
        {/* <Tab.Screen  name={"success"} component={Success}/>
        <Tab.Screen name="Checkout" component={CheckoutPage}/> */}
        
        <Tab.Screen 
        name="Search" 
        component={SearchPage}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="home-outline" size={24}  color={color}/>
          )}}
        />
        {/* <Tab.Screen 
        name="Rest" 
        component={RestaurantPage}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="clipboard-list" size={24}  color={color}/>
          )}}
        /> */}
        
        <Tab.Screen 
        name="Order" 
        component={OrderPage}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="clipboard-list" size={24}  color={color}/>
          )}}
        
        />
        
         
         <Tab.Screen 
         name="filter" 
         component={FilterPage}
         options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="hearto" size={24}  color={color}/>
          )}}
        />

      <Tab.Screen 
         name="test" 
         component={Map}
         options={{
          tabBarIcon: ({color}) => (
            <Feather name="bell" size={24}  color={color}/>
          )}}
        />
        {/* <Tab.Screen name="SandBox" component={SandBox}/>
        <Tab.Screen name="test" component={SignIn}/> */}
        {/* <Tab.Screen name="testd" component={SettingsScreen}/>
        <Tab.Screen name="testdd" component={SettingsScreen}/>
        <Tab.Screen name="SignUp" component={SignUp}/> */}
        
      </Tab.Navigator>

    )

  }


  return (

<GestureHandlerRootView>
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" 
      screenOptions={{ headerShown: false }}
      >

        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Tab" component={Tabs} />
        <Stack.Screen name="Filter" component={FilterPage}  options={{ presentation: 'modal' }} />
        <Stack.Screen name="RestaurantPage" component={RestaurantPage}  />
        <Stack.Screen name="MapPage" component={MapPage}  />
        <Stack.Screen name="Success" component={Success}  />
        <Stack.Screen name="Checkout" component={CheckoutPage}  />
        </Stack.Navigator>
        </NavigationContainer>
    </Provider>
    </GestureHandlerRootView>
  )

 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 200
    // justifyContent: 'center',
  },
  logo: {
    height: 200
  },
  imagePlayground: {
    position: 'relative',
    width: '100%'
  },
  imageBG : {
    position: 'absolute',
    height : 800,
    width: '100%'
  },
  sliderContainer: {
    width: 200,
    position: 'relative',
    height: 40,
  },
  valueContainer: {
    position: 'absolute',
    top: -25,
    width: 30,
    alignItems: 'center',
  },
});
