

import React from 'react'
import { View, Text, Image, ScrollView, ImageBackground, FlatList, Touchable, TouchableOpacity } from 'react-native'
import { styles } from './HomePageComponentStyles'
import revoltResImg from "../assests/revolt-rest.png"
import FooterComponent from '../Footer/FooterComponent'
import HeaderComponent from '../Header/HeaderComponent'
import TopPicItemComponent from '../Topics/TopPicItemComponent'
import RatingComponent from '../RatingComponent/RatingComponent'



const HomePageComponent = ({ navigation }) => {
    const resList = [{
        id: 0,
        restName: "Revolt Bar N Kitchen",
        resLocation: "Jubilee Hills, Hyderabad",



    }, {
        id: 1,
        restName: "Revolt Bar N Kitchen",
        resLocation: "Jubilee Hills, Hyderabad",



    }, {
        id: 2,
        restName: "Revolt Bar N Kitchen",
        resLocation: "Jubilee Hills, Hyderabad",



    },
    {


        id: 3,
        restName: "Revolt Bar N Kitchen",
        resLocation: "Jubilee Hills, Hyderabad",



    },
    {
        id: 4,
        restName: "Revolt Bar N Kitchen",
        resLocation: "Jubilee Hills, Hyderabad",



    },
    {
        id: 5,
        restName: "Revolt Bar N Kitchen",
        resLocation: "Jubilee Hills, Hyderabad",



    },
    {
        id: 6,
        restName: "Revolt Bar N Kitchen",
        resLocation: "Jubilee Hills, Hyderabad",



    },]
    const exploreList = [{
        id: 0,
        exploreName: "Reastaturant"
    },
    {
        id: 1,
        exploreName: "Pub"
    },
    {
        id: 2,
        exploreName: "Cafe"
    }
        , {
        id: 3,
        exploreName: "Concert"
    },
    {
        id: 4,
        exploreName: "Events"
    },
    {
        id: 5,
        exploreName: "D'Js"
    },
    {
        id: 6,
        exploreName: "Reastaturant"
    }]
    const nearByList = [
        {
            id: 0,
            nearByName: "Fieachazo",
            nearByLocation: "Madhapur, Hyderabad"
        },
        {
            id: 1,
            nearByName: "Fieachazo",
            nearByLocation: "Madhapur, Hyderabad"
        },
        {
            id: 2,
            nearByName: "Fieachazo",
            nearByLocation: "Madhapur, Hyderabad"
        },
        {
            id: 3,
            nearByName: "Fieachazo",
            nearByLocation: "Madhapur, Hyderabad"
        },
        {
            id: 4,
            nearByName: "Fieachazo",
            nearByLocation: "Madhapur, Hyderabad"
        },
        {
            id: 5,
            nearByName: "Fieachazo",
            nearByLocation: "Madhapur, Hyderabad"
        },
        {
            id: 6,
            nearByName: "Fieachazo",
            nearByLocation: "Madhapur, Hyderabad"
        }
    ]


    const createRows = (data, rowCount) => {
        const resRows = [];

        for (let i = 0; i < data.length; i += rowCount) {
            const resRow = data.slice(i, i + rowCount);
            // rows.push(row)
            resRows.push(resRow.map(item => (
                {
                    ...item

                }
            )))
        }

        return resRows

    }
    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent />
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.headerAppCon}>

                    <View style={{ borderRadius: 15, marginVertical: 20 }}>
                        <ImageBackground source={require('../assests/PromoAdvertising.png')} >
                            <Image source={require("../assests/special-img.png")} />

                        </ImageBackground>

                    </View>
                    <View style={{ flex: 1, flexDirection: "column" }}>
                        <Text style={styles.rowBoldTxt}>Recommended For You</Text>
                        <View>
                            <FlatList data={resList} horizontal={false} numColumns={2} keyExtractor={(item, index) => index.toString()} renderItem={({ item, index }) =>
                            (

                                <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: 'center', width: 150, height: 150, marginTop: 10, marginRight: index % 2 === 0 ? 20 : 0, borderWidth: 1, borderColor: "#E1E1E1", borderStyle: "solid", borderRadius: 20 }}>
                                    <TouchableOpacity onPress={() => navigation.navigate("RevoltRestaurantPage")}>
                                        <View style={{ position: "relative" }}>


                                            <Image source={require(`../assests/revolt-rest.png`)} style={{ width: 187 }} />
                                            <View style={{ position: "absolute", top: 70, left: 135 }}>


                                                <RatingComponent />
                                            </View>
                                        </View>
                                        <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", marginVertical: 10 }}>
                                            <Text style={styles.rowBoldTxt}>{item.restName}</Text>
                                            <Text>{item.resLocation}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>


                            )}




                            />

                            {/* <View style={{ marginhorizontal: 20, marginVertical: 20 }}>
                            <Image source={require('../assests/revolt-rest.png')} />
                            <Text>Revolt Bar N Kitchen</Text>
                            <Text>Jubilee Hills, Hyderabad</Text>
                        </View>
                        <View style={{ marginhorizontal: 20, marginVertical: 20 }}>
                            <Image source={require('../assests/revolt-rest.png')} />
                            <Text>Revolt Bar N Kitchen</Text>
                            <Text>Jubilee Hills, Hyderabad</Text>
                        </View>
                        <View style={{ marginhorizontal: 20, marginVertical: 20 }}>
                            <Image source={require('../assests/revolt-rest.png')} />
                            <Text>Revolt Bar N Kitchen</Text>
                            <Text>Jubilee Hills, Hyderabad</Text>
                        </View> */}
                        </View>
                    </View>
                    <View style={{ flexDirection: "column", marginVertical: 10 }}>
                        <Text style={styles.rowBoldTxt}>Explore</Text>
                        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>


                            <FlatList data={exploreList} horizontal={false} numColumns={3} keyExtractor={item => item.id.toString()} renderItem={({ item }) => (
                                <View style={{ height: 126, width: 100, marginRight: 10, flexDirection: "column", justifyContent: "center", alignItems: 'center', height: "auto", width: "auto" }}>
                                    <Image source={require("../assests/rest-explore-img.png")} />
                                    <Text>{item.exploreName}</Text>
                                </View>

                            )} />
                        </View>

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }} >
                        <View style={{ flexDirection: "column" }}>


                            <Text style={styles.rowBoldTxt}>Near By</Text>
                            <FlatList data={nearByList} keyExtractor={item => item.id.toString()} horizontal={false} numColumns={3} renderItem={({ item }) => (

                                <View style={{ marginRight: 10, marginTop: 20 }}>

                                    <Image source={require("../assests/Amnesia-rest.png")} />
                                    <View style={{ marginTop: 5 }}>

                                        <Text>{item.nearByName}</Text>
                                        <Text>{item.nearByLocation} </Text>
                                    </View>
                                </View>



                            )} />
                        </View>
                        <View >
                            <Text style={styles.rowBoldTxt}>View All</Text>
                        </View>
                    </View>
                    <TopPicItemComponent />



                </View>

            </ScrollView >
            <View style={{ padding: 0, margin: 0 }}>
                <FooterComponent />
            </View>

        </View >
    )
}

export default HomePageComponent
