import applePie from '../../../assets/appiePie.jpeg'
import burgerKing from '../../../assets/burgerking.jpeg'
import burgerMeals from '../../../assets/burgersMeal.webp'
import burrito from '../../../assets/burrito.webp'
import burritoBowl from '../../../assets/burritobowl.avif'
import cake from '../../../assets/cake.jpeg'
import chiptole from '../../../assets/chiptole.jpeg'
import cookies from '../../../assets/cookies.webp'
import cupcakes from '../../../assets/cupcake.webp'
import eggrolls from '../../../assets/eggrolls.jpeg'
import margherita from '../../../assets/margherita.jpeg'
import marinara from '../../../assets/marinara.jpeg'
import mcBurger from '../../../assets/mcBurger.jpeg'
import mcdonalds from '../../../assets/mcdonalds.jpeg'
import pizzhut from '../../../assets/pizzahut.webp'
import ramen from '../../../assets/ramen.jpeg'
import shang from '../../../assets/shang.jpeg'
import sushi from '../../../assets/sushi.jpeg'
import tacos from '../../../assets/tacos.jpeg'
import unapizza from '../../../assets/unaPizza.jpeg'
import wine from '../../../assets/wine.jpeg'
import cakestore from '../../../assets/cakestore.avif'


export const data = [

    {
       restaurant : 'chiptole',
       type : 'Mexican',
       rating : "4.9" ,
       pic : chiptole,
       free : true,
       coordinate : [
           {
            latitude : 40.8694152,
            longitude : -73.826114
           },
           {
            latitude : 40.8759543,
            longitude : -73.8358455
           },
           {
            latitude : 40.8943563,
            longitude : -73.8231445,
           },
       ],
       menu : [
           { 
               id : 1,
               dish : "Burrito Bowl",
               price : 10,
               img : burritoBowl
           },
           { 
            id : 2,
            dish : "burrito",
            price : 12.99,
            img : burrito
        },
        { 
            id : 3,
            dish : "tacos",
            price : 8.99,
            img : tacos
        }
       ]
    },
    {
        restaurant : 'UnaPizza',
        rating : "5.0" ,
        pic : unapizza,
        free : true,
        type :'pizza',
        coordinate : [
            {
             latitude : 40.8694152,
             longitude : -73.826114
            },
            {
             latitude : 40.8759543,
             longitude : -73.8358455
            },
            {
             latitude : 40.8943563,
             longitude : -73.8231445,
            },
        ],
        menu : [
            { 
                id : 4,
                img : margherita,
                dish : "margrita",
                price : 10.99,
            },
            { 
                id : 5,
                img: wine,
             dish : "wine",
             price : 5.99,
         },
         { 
             id : 6,
             img: marinara,
             dish : "Marinara",
             price : 10.99,
         }
        ]
     },
     {
        restaurant : 'Shangeri-la',
        rating : "4.1" ,
        pic : shang,
        type :'Asian',
        coordinate : [
            {
             latitude : 40.8694152,
             longitude : -73.826114
            },
            {
             latitude : 40.8759543,
             longitude : -73.8358455
            },
            {
             latitude : 40.8943563,
             longitude : -73.8231445,
            },
        ],
        menu : [
            { 
                id : 7,
                dish : "Ramen",
                price : 10.99,
                img : ramen
            },
            { 
                id : 8,
             dish : "Sushi",
             price : 5.99,
             img : sushi
         },
         { 
            id : 9,
             dish : "Eggroll",
             price : 2.99,
             img : eggrolls,
         }
        ]
     },
     {
        restaurant : 'Burger King',
        rating : "4.1" ,
        type : 'burgers',
        pic : burgerKing,
        coordinate : [
            {
                latitude: 40.709482,
                longitude: -74.01164,
            },
            {
                latitude: 40.705464,
                longitude: -74.011004,
            },
            {
                latitude: 40.718515,
                longitude: -73.986759,
            },
            {
                latitude: 40.866497,
                longitude: -73.825773,
            },
            {
                latitude: 40.900726,
                longitude: -73.820404,
            }
        ],
        menu : [
            { 
                id : 10,
                dish : "Apple pie",
                price : 1.99,
                img : applePie
            },
            { 
                id : 11,
             dish : "Burger",
             price : 12.99,
             img : burgerMeals
         },
         { 
            id : 12,
             dish : "Meal",
             price : 15.99,
             img : burgerMeals
         }
        ]
     },
     {
        restaurant : 'mcDonalds',
        rating : "4.1" ,
        pic : mcdonalds,
        type : "burgers",
        coordinate : [
            {
                latitude: 40.8690376,
                longitude: -73.8305321,
            },
            {
                latitude: 40.8729804,
                longitude: -73.852458,
            },
            {
                latitude: 40.8854878,
                longitude: -73.8264929,
            },
            {
                latitude: 40.866497,
                longitude: -73.825773,
            },
            {
                latitude: 40.900726,
                longitude: -73.820404,
            }
        ],
        menu : [
            { 
                id : 13,
                dish : "burgerMeal",
                price : 12.50,
                img : burgerMeals,
            },
            { 
                id : 14,
             dish : "cookies",
             price : 12.50,
             img : cookies
         },
         { 
            id : 15,
             dish : "pie",
             price : 2.99,
             img : applePie
         }
        ]
     },
 
     {
        restaurant : 'Pizza Hut',
        type : 'pizza',
        rating : "4.1" ,
        pic : pizzhut,
        coordinate : [
            {
             latitude : 40.8694152,
             longitude : -73.826114
            },
            {
             latitude : 40.8759543,
             longitude : -73.8358455
            },
            {
             latitude : 40.8943563,
             longitude : -73.8231445,
            },
        ],
        menu : [
            { 
                id : 16,
                dish : "pie",
                price : 12.99,
                img : margherita
            },
            { 
                id : 17,
             dish : "cookies",
             price : 12.99,
             img : cookies
         },
         { 
            id : 19,
             dish : "cake",
             price : 2.99,
             img : cupcakes
         }
        ]
     },
      {
        restaurant : 'Genie Cakes',
        rating : "4.9" ,
        type :'Cake',
        pic : cakestore,
        coordinate : [
            {
             latitude : 40.8694152,
             longitude : -73.826114
            },
            {
             latitude : 40.8759543,
             longitude : -73.8358455
            },
            {
             latitude : 40.8943563,
             longitude : -73.8231445,
            },
        ],
        menu : [
            { 
                id : 20,
                dish : "Vanilla Cake",
                price : 7.99,
                img : cake
            },
            { 
                id : 21,
             dish : "Cookies",
             price : 5.99,
             img : cookies,
         },
         { 
             id : 22,
             dish : "cupcakes",
             price : 2.99,
             img : cupcakes
         }
        ]
     },


]