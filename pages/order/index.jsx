import { View, Text, StyleSheet, TouchableHighlight , TouchableOpacity} from "react-native";
import CustomText from "../../components/CustomText";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { addFood, removeFood } from "../../storeFeature/cartslice";
import CTA from "../../components/CTA";
import { blue, purple } from "../../utility";

const CheckoutItem = ({id, dishName ="hello", price , quantity = 1}) => {



    const dispatch = useDispatch()



    const addToCart = () => {

        dispatch(addFood({title : dishName, price, id }))
    }

    const decreaseToCart = () => {

        dispatch(removeFood({id : id, price}))
    }

    return ( 
        <View style={styles.invoice}>

            <View>
                <CustomText text={dishName} font={"sans-regular"} size={15} color={blue}/>

                <CustomText text={price} font={"sans-semi-bold"} size={14} color={blue}/>


           
            </View>

            <View  style={{width : 100, flexDirection : 'row', alignItems : 'center', justifyContent : 'space-between'}}>

                <TouchableOpacity onPress={decreaseToCart}>
                <AntDesign name={"minuscircleo"} size={25}/>
                </TouchableOpacity>
                    
                    

                       <CustomText text={quantity} font={"sans-semi-bold"} color={blue} />

                    <TouchableOpacity onPress={addToCart}>
                        <AntDesign name={"pluscircle"} size={25} color={purple}/>
                    </TouchableOpacity>
                    
                </View>


        </View>
    )
}


const OrderPage = ({navigation}) => {


        const food = useSelector( (state) => {
           
            return state.food})


        const subTotal = useSelector((state) => state.total)


  return (
    <View style={styles.orderContainer}>

        <View>
      <CustomText text={"order"} font={"loraBold"} size={27} color={blue} />





      {/* <CheckoutItem/> */}
      {food.map((item) => {
          return <CheckoutItem id={item.data.id} price={item.data.price} dishName={item.data.title} quantity={item.data.quantity}/>
      })}
      </View>


      <View>

      <CustomText text={"Total"} font={"loraBold"} size={17} color={blue} />

      <View style={styles.invoice}>
        <CustomText text={"SubTotal"} font={"sans-regular"} size={15} color={blue}/>

        <CustomText text={`$ ${subTotal}`} font={"sans-regular"} size={15} color={blue}/>
      </View>
      <View style={styles.invoice}>
        <CustomText text={"Restaurant Ticket"} font={"sans-regular"} size={15}  color={blue}/>

        <CustomText text={"- $ 10.00"} font={"sans-regular"} size={15}  color={blue}/>
      </View>

      <View style={styles.invoice}>
        <CustomText text={"Delivery"} font={"sans-regular"} size={15} color={blue}/>

        <CustomText text={"+ $ 6.00"} font={"sans-regular"} size={15} color={blue}/>
      </View>
      <View style={{ flexDirection : 'row', justifyContent : 'space-between' }}>

        <CustomText text={"To Pay"} font={"sans-bold"} size={17} color={blue}/>

        <CustomText text={`$ ${(subTotal - 10.00) + 6.00 }` } font={"sans-bold"} size={17} color={blue}/>

      </View>



      <View style={{marginTop : 40}}>
      <CTA title={"Checkout"} handlePress={() => navigation.navigate('Checkout')}/>
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
    paddingHorizontal : 25,

    paddingVertical : 30

  }
});

export default OrderPage;
