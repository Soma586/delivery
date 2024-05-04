import * as Font from 'expo-font';
import { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';







const loadCustomFonts = async () => {
    await Font.loadAsync({
        'open-sans-regular': require('../../assets/Open_Sans/static/OpenSans-Regular.ttf'),
        'open-sans-semi-bold' : require('../../assets/Open_Sans/static/OpenSans-SemiBold.ttf')
        // Load other Open Sans font weights if needed
    });
}

const CustomText = ({ text, font , size = 14}) => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            await loadCustomFonts();
            setFontLoaded(true);
        }
        loadFonts();
    }, []);

    return (
        <Text style={[styles[font]], {fontSize : size}}>
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
    ssBold : {
        fontFamily : 'open-sans-semi-bold'
    }
});

export default CustomText;



