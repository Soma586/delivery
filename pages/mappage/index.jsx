import React from 'react';
import _ from 'lodash'
import MapView , {Marker, AnimatedRegion} from 'react-native-maps';
import { StyleSheet, View, Animated, Text , Pressable} from 'react-native';
import { Feather} from '@expo/vector-icons'
//import getLocations  from 'restaurant-location-search-api'

const darkModeStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ];

export default function MapPage(props) {



    const {
        route,
        navigation,
    } = props

    console.log("this is the map")

    console.log(props)

    const coordinates =[
        {
            latitude : 40,
            longitude : -120
        },
        {
            latitude: 37.78825,
            longitude: -122.4324,
        },
        {
            latitude: 40.878015,
            longitude: -73.832452,
        }
    ]
    const {name, coordinate } = props.route.params

   // { lat: 40.878015, long: -73.832452 }

   // latitude: 37.78825,
   //longitude: -122.4324,

   //console.log(data)

   const displayMarker = _.map(coordinate, (coordinate, index) => {
     return  <Marker
       key={index}
       coordinate={coordinate}
       title={name}
       description={"The best place to eat"}
       />
   })
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      customMapStyle={darkModeStyle}
       initialRegion={{
        latitude: 40.878015,
        longitude: -73.832452,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      >

         

          {displayMarker}
      

          </MapView>

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