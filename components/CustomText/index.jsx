import {useFonts} from 'expo-font';
import { useState, useEffect, useCallback } from 'react';
import { Text, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';




SplashScreen.preventAutoHideAsync();

const loadCustomFonts = async () => {
    await Font.loadAsync({
        'open-sans-regular': require('../../assets/Open_Sans/static/OpenSans-Regular.ttf'),
        'open-sans-semi-bold' : require('../../assets/Open_Sans/static/OpenSans-SemiBold.ttf'),
        'loraBold' : require('../../assets/Lora/static/Lora-Bold.ttf'),
        'open-sans-bold' :  require('../../assets/Open_Sans/static/OpenSans-Bold.ttf'),
        // Load other Open Sans font weights if needed
    });
}

const CustomText = ({ text, font , size = 14, color = "black" , spacing = false}) => {
    // const [fontLoaded, setFontLoaded] = useState(false);

    // useEffect(() => {
    //     const loadFonts = async () => {
    //         await loadCustomFonts();
    //         setFontLoaded(true);
    //     }
    //     loadFonts();
    // }, []);

    const [fontsLoaded, fontError] = useFonts({
        //'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
        'sans-light': require('../../assets/Open_Sans/static/OpenSans-Light.ttf'),
        'sans-regular': require('../../assets/Open_Sans/static/OpenSans-Regular.ttf'),
        'sans-semi-bold' : require('../../assets/Open_Sans/static/OpenSans-SemiBold.ttf'),
        'loraBold' : require('../../assets/Lora/static/Lora-Bold.ttf'),
        'loraRegular' : require('../../assets/Lora/static/Lora-Regular.ttf'),
        'sans-bold' :  require('../../assets/Open_Sans/static/OpenSans-Bold.ttf'),
      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError]);
    
      if (!fontsLoaded && !fontError) {
        return null;
      }

    return (
        <Text onLayout={onLayoutRootView} style={ [{fontFamily : font, fontSize : size, color : color}, spacing && { letterSpacing : 3}] }>
            {text}
        </Text>
    );
}

const styles = StyleSheet.create({
    sans: {
        fontFamily: 'open-sans-regular'
    },
    loaded: {
       // fontFamily: 'open-sans-regular'
       fontFamily: 'open-sans-semi-bold'
    },
    sansBold : {
        fontFamily : 'open-sans-bold'
    },
    ssBold : {
        fontFamily : 'open-sans-semi-bold',
        
    },
    loraBold : {
        fontFamily : 'loraBold'
    }
});

export default CustomText;



