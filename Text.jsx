import {useEffect} from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

const Text = (props) => {



    const loadCustomFonts = async () => {
        await Font.loadAsync({
            'YourCustomFont': require('./path/to/your/font.ttf'),
        });
    }
    

    useEffect(() => {


    })



    return <RNText {...props} style={[styles.text, props.style]} />;
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'YourCustomFont',
        // Additional styles if needed
    },
});

export default Text;