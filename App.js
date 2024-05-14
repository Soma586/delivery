import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from './pages/signIn/index'
import SignUp from './pages/signup';
import DiscoverItem from './components/discoverItem';
import MenuItem from './components/MenuItem';
import FilterPage from './pages/filters';
import SearchPage from './pages/search';
import RestaurantPage from './pages/restaurantPage';
import OrderPage from './pages/order';



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



  const Tabs = () => {


    return (
      <Tab.Navigator>
        <Tab.Screen name="Order" component={OrderPage}/>
        <Tab.Screen name="Rest" component={RestaurantPage}/>
         <Tab.Screen name="Search" component={SearchPage}/>
         <Tab.Screen name="filter" component={FilterPage}/>
        <Tab.Screen name="SandBox" component={SandBox}/>
        <Tab.Screen name="test" component={SignIn}/>
        {/* <Tab.Screen name="testd" component={SettingsScreen}/>
        <Tab.Screen name="testdd" component={SettingsScreen}/>
        <Tab.Screen name="SignUp" component={SignUp}/> */}
        
      </Tab.Navigator>

    )

  }


  return (

    <NavigationContainer>

      <Tabs/>
    </NavigationContainer>
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
