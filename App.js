import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
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
import CheckoutPage from './pages/checkout';
import Success from './pages/success';
import { Ionicons, FontAwesome5, AntDesign, Feather} from '@expo/vector-icons'



//SplashScreen.preventAutoHideAsync()






// const Test = () => {

//   const [fontsLoaded, fontError] = useFonts({
//     'Poppins': require('./assets/Poppins/Poppins-Regular.ttf'),
//   });

//   const onLayoutRootView = useCallback(async () => {
//     if (fontsLoaded || fontError) {
//       await SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded, fontError]);

//   if (!fontsLoaded && !fontError) {
//     return null;
//   }
//   return (
//     <View style={styles.container} onLayout={onLayoutRootView}>

//       <Image
//       source={require('./assets/Logo.png')}
//       />
//       <Text style={{fontFamily: 'Poppins'}} >
//         Live happier and healthier by learning the fundamentals of meditation and mindfulness</Text>

//         <View style={styles.imagePlayground}>

//           <Image
//           source={require('./assets/Background.png')}
//           style={styles.imageBG}
//           />
//         {/* <Image
//         source={require('./assets/Yoga.png')}
//           /> */}

//          <Image
//         source={require('./assets/Yoga.png')}
//           />

//         </View>
     
//     </View>
//   );

// }

export default function App() {




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
        <Tab.Screen 
        name="Rest" 
        component={RestaurantPage}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="clipboard-list" size={24}  color={color}/>
          )}}
        />
        
        <Tab.Screen 
        name="Order" 
        component={OrderPage}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="hearto" size={24}  color={color}/>
          )}}
        
        />
        
         
         <Tab.Screen 
         name="filter" 
         component={FilterPage}
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


    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" 
      screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Tab" component={Tabs} />
        <Stack.Screen name="Filter" component={FilterPage}  options={{ presentation: 'modal' }} />
        </Stack.Navigator>
        </NavigationContainer>
    </Provider>
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
  }
});
