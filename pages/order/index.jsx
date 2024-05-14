import { View, Text, StyleSheet } from "react-native";
import CustomText from "../../components/CustomText";
import { AntDesign } from "@expo/vector-icons";


const CheckoutItem = ({ dishName ="hello", price= "$19.99" , quantity = 1}) => {


    return ( 
        <View style={styles.invoice}>

            <View>
                <CustomText text={dishName} font={"sans"} size={15}/>

                <CustomText text={price} font={"loaded"} size={14}/>


           
            </View>

            <View  style={{width : 100, flexDirection : 'row', alignItems : 'center', justifyContent : 'space-between'}}>
                    <AntDesign name={"minuscircleo"} size={25}/>

                       <CustomText text={quantity} font={"loaded"} />

                    <AntDesign name={"pluscircle"} size={25} color="purple"/>
                </View>


        </View>
    )
}


const OrderPage = () => {
  return (
    <View style={styles.orderContainer}>

        <View>
      <CustomText text={"order"} font={"loraBold"} size={27} color="blue" />





      <CheckoutItem/>
      </View>


      <View>

      <CustomText text={"Total"} font={"loraBold"} size={17} />

      <View style={styles.invoice}>
        <CustomText text={"SubTotal"} font={"sans"} size={15} />

        <CustomText text={"text"} font={"sans"} size={15} />
      </View>
      <View style={styles.invoice}>
        <CustomText text={"SubTotal"} font={"sans"} size={15} />

        <CustomText text={"$ 10.00"} font={"sans"} size={15} />
      </View>

      <View style={styles.invoice}>
        <CustomText text={"Delivery"} font={"sans"} size={15} />

        <CustomText text={"$ 30.00"} font={"sans"} size={15} />
      </View>
      <View style={{ flexDirection : 'row', justifyContent : 'space-between' }}>

        <CustomText text={"To Pay"} font={"sansBold"} size={17} />

        <CustomText text={"$ 30.00"} font={"sansBold"} size={17} />

      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  invoice: {
    //flex : 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    //height : 200
  },
  orderContainer : {

    flex :1 ,
    justifyContent : 'space-between',
    paddingHorizontal : 25

  }
});

export default OrderPage;
