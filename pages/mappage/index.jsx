import {useCallback, useRef, useMemo} from 'react';
import _ from 'lodash'
import MapView , {Marker, AnimatedRegion, Callout} from 'react-native-maps';
import { StyleSheet, View, Animated, Text , Pressable, Image, TouchableOpacity} from 'react-native';
import { Feather} from '@expo/vector-icons'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import BurgerKing from '../../assets/burgerking.jpeg'
import { blue, grey } from '../../utility';
import mapIcon from '../../assets/mapIcon.webp'
import test from '../../assets/testz.png'
import CustomText from '../../components/CustomText';



export default function MapPage(props) {



    const {
        route,
        navigation,
    } = props

    const {name, coordinate, pic } = props.route.params

    const bottomSheetRef = useRef(null);


    const Card = ({img, handlePress}) => {



        return (
    
            <TouchableOpacity onPress={handlePress} style={styles.card} >
            <View style={{flexDirection : 'row'}}>
    
                <Image
                style ={{width : 100, height : 100, borderRadius : 10, marginRight : 8}}
                resizeMode={'cover'}
                source={pic}
                />
    
                <View style ={{paddingRight : 18, width : 200}}>
                   <CustomText text={name} font={"loraBold"} size={20} color={blue}/>
                    <Text>
                    Sed ut perspiciatis unde illo inventore veri
                        
                    </Text>
    
                </View>
                
    
            </View>
            </TouchableOpacity>
        )
    }

    const snapPoints = useMemo(() => ['25%', '50%', '70'], []);
 
    
      const mapRef = useRef(null);

      const markerRefs = useRef([]);

    //   const jumpToMarker = (lat, long) => {
    //     mapRef.current.animateToRegion({
    //       latitude: lat,
    //       longitude: long,
    //       latitudeDelta: 0.0922,
    //       longitudeDelta: 0.0421,
    //     });
    //   };

    const jumpToMarker = (index) => {
        const { latitude, longitude } = coordinate[index]
        if (mapRef.current) {
          mapRef.current.animateToRegion({
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,

          }, 1000);
          markerRefs.current[index].showCallout();

        } else {
          console.error("Map reference is not set yo.");
        }
      };
    


     {/* <Image source={test} style={{ width: 40, height: 80 }} />
        <Callout style={{ width: 100, height: 40 }} >
          <Text>{name}</Text>
          <Text>The best place to eat</Text>
        </Callout>
      </Marker> */}

   const displayMarker = _.map(coordinate, (coordinate, index) => {
     return (
        <Marker
        key={index}
        coordinate={coordinate}
        title={name}
        description={"The best place to eat"}
        ref={(ref) => (markerRefs.current[index] = ref)}
      />
      
     )
   })
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      ref={mapRef}
       initialRegion={{
        latitude: 40.878015,
        longitude: -73.832452,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      >

         

          {displayMarker}
      

          </MapView>

          <BottomSheet
        ref={bottomSheetRef}
        //onChange={handleSheetChanges}
        snapPoints={snapPoints}
      >
        <BottomSheetView style={styles.contentContainer}
       
        >
            {coordinate.map((coord, index) => (
            
            <Card handlePress={() => jumpToMarker(index)}/>
          ))}
        </BottomSheetView>
      </BottomSheet>

        <Pressable  style={styles.icon} onPress={ () => navigation.goBack()}>
            <View>
            <Feather name="arrow-left-circle" size={46} color="black"/>
            </View>
            
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card : {
    borderColor : grey,
    borderWidth : 1,
    marginBottom : 10,
    paddingHorizontal : 20,
    paddingVertical : 10,
    borderRadius : 10,
  },
  contentContainer : {
    paddingHorizontal : 20
  },
  icon : {
      position : 'absolute',
      top : 60,
      left : 30,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});