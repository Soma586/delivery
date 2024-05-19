import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  Dimensions,
} from "react-native";
import CTA from "../../components/CTA";
import CustomText from "../../components/CustomText";
import { blue, purple } from "../../utility";

export const Input = ({ label, placeholder, handleChange }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <View style={{ marginBottom: 4 }}>
        <CustomText text={label} font={"loraRegular"} size={14} color={blue} />
      </View>

      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        borderWidth={2}
      />
    </View>
  );
};

const SignIn = ({ navigation }) => {
  return (
    <View style={{ height: "100%" }}>
      {/* <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style={{flex: 2, backgroundColor: 'darkorange'}} /> */}
      <View style={{ flex: 1 }}>
        <Image
          //source={require('../../assets/background.png')}
          style={styles.signInPic}
          source={require("../../assets/background.png")}
        />
      </View>

      <View style={[styles.signContainer, { flex: 1 }]}>
        <View style={{ marginBottom: 15 }}>
          <CustomText
            text={"Hello again!"}
            size={35}
            font="loraBold"
            color={blue}
          />
        </View>

        <View>
          <Input label="Email" placeholder={"Enter your Email"} />

          <Input label="Password" placeholder={"Enter your password"} />
        </View>

        <CTA title="Login" handlePress={() => navigation.navigate("Tab")} />
        <CustomText text={"Forgot your password?"} font="sans-light" />

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CustomText text={"Don't have an account? "} font="sans-light" />

          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <CustomText text="SignUp" color={purple} font={"sans-semi-bold"} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signInPic: {
    width: "100%",
    height: "100%",
    //height : 400,
    //marginBottom : 20,
    marginTop : -30
  },
  signContainer: {
    height: "100%",
    paddingHorizontal: 30,
    justifyContent: "space-around",
    paddingBottom: 40,
  },
  welcome: {
    fontSize: 35,
    color: "blue",
  },
  inputLabel: {
    marginBottom: 6,
  },
  inputText: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    // borderWidth : 1,
    borderColor: "lightgrey",
    //width: '100%',
    paddingLeft: 25,
    borderRadius: 4,
    paddingVertical: 10,
  },
});

export default SignIn;
