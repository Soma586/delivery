import { View, Text, StyleSheet, TouchableHighlight} from "react-native";
import CustomText from "../../components/CustomText";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { addFood, removeFood } from "../../storeFeature/cartslice";
import CTA from "../../components/CTA";

const CheckoutItem = ({ dishName ="hello", price= "$19.99" , quantity = 1}) => {



    const dispatch = useDispatch()



    const addToCart = () => {

        dispatch(addFood({title : dishName, price }))
    }

    const decreaseToCart = () => {

        dispatch(removeFood({title : dishName}))
    }

    return ( 
        <View style={styles.invoice}>

            <View>
                <CustomText text={dishName} font={"sans"} size={15}/>

                <CustomText text={price} font={"loaded"} size={14}/>


           
            </View>

            <View  style={{width : 100, flexDirection : 'row', alignItems : 'center', justifyContent : 'space-between'}}>

                <TouchableHighlight onPress={decreaseToCart}>
                <AntDesign name={"minuscircleo"} size={25}/>
                </TouchableHighlight>
                    
                    

                       <CustomText text={quantity} font={"loaded"} />

                    <TouchableHighlight onPress={addToCart}>
                        <AntDesign name={"pluscircle"} size={25} color="purple"/>
                    </TouchableHighlight>
                    
                </View>


        </View>
    )
}


const OrderPage = () => {


        const food = useSelector( (state) => {
            console.log(state)
            return state.food})


        const subTotal = useSelector((state) => state.total)

       // console.log(food)

  return (
    <View style={styles.orderContainer}>

        <View>
      <CustomText text={"order"} font={"loraBold"} size={27} color="blue" />





      {/* <CheckoutItem/> */}
      {food.map((item) => {
          return <CheckoutItem dishName={item.data.title} quantity={item.data.quantity}/>
      })}
      </View>


      <View>

      <CustomText text={"Total"} font={"loraBold"} size={17} />

      <View style={styles.invoice}>
        <CustomText text={"SubTotal"} font={"sans"} size={15} />

        <CustomText text={`$ ${subTotal}`} font={"sans"} size={15} />
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

        <CustomText text={`$ ${subTotal}` } font={"sansBold"} size={17} />

      </View>


      <CTA title={"Checkout"}/>
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
