

import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './LocationPageStyles'
import LinearGradient from 'react-native-linear-gradient'

const LocationPageComponent = ({ navigation }) => {

    const [locationNameValue, setLocationName] = useState("")
    const [filteredItemsList, setFilteredItems] = useState([])
    const locationList = [{
        id: 0,
        locationName: "JubileeHills",

    }, {
        id: 1,
        locationName: "Gachibowli"
    }, {
        id: 2,
        locationName: "Malkajgiri"
    },
    {
        id: 3,
        locationName: "Gachibowli"
    },
    {
        id: 4,
        locationName: "Gachibowli"
    },
    {
        id: 5,
        locationName: "Gachibowli"
    },
    {
        id: 6,
        locationName: "Gachibowli"
    },
    {
        id: 7,
        locationName: "Gachibowli"
    },
    {
        id: 8,
        locationName: "Gachibowli"
    },
    {
        id: 9,
        locationName: "Gachibowli"
    },
    {
        id: 10,
        locationName: "Gachibowli"
    },







    ]

    const filterItems = (searchedTxt) => {
        // const removedSpaces = searchedTxt.replace(/\s+/g, '');
        const updatedFilterList = locationList.filter(each => each.locationName.toLowerCase().includes(searchedTxt.toLowercase()))

        setFilteredItems(updatedFilterList)

    }
    return (
        <ScrollView>
            <View style={styles.locationMainCon}>
                <View style={styles.locationDetailsCon}>
                    <View style={styles.arrowCon}>
                        <Image source={require('../assests/arrow-down.png')} style={{ height: 20, width: 20 }} />


                        <Text style={{ color: "#1C1C1C", fontWeight: "bold" }}>Select a location</Text>
                    </View>

                    <View style={{ backgroundColor: "white", borderWidth: 2, borderColor: "black", padding: 5, borderRadius: 10, flexDirection: "row", alignItems: "center", gap: 10 }}>
                        <Image source={require('../assests/search.png')} style={{ height: 20, width: 20 }} />
                        <TextInput placeholder="Search" style={{ fontSize: 15 }} value={locationNameValue} onChangeText={(txt) => {
                            setLocationName(txt)
                            filterItems(txt)
                        }} />

                    </View>
                    <View style={{ flexDirection: "row", gap: 10, marginVertical: 10 }}>
                        <Image source={require('../assests/Vector(6).png')} style={{ height: 20, width: 20 }} />
                        <Text style={styles.yourLocationText}>Use Your Current Location</Text>
                    </View>
                </View>


                <Text style={styles.popularText}>Popular</Text>
                <View style={{ marginVertical: 20 }}>
                    {filteredItemsList.map((location) => (
                        <View key={location.id} style={styles.locationItem}>
                            <Text style={styles.locationName}>{location.locationName} Hyderabad</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require('../assests/Frame381.png')} />
                                <Image source={require('../assests/Frame382.png')} />
                            </View>
                        </View>
                    ))}
                </View>
                <View style={{ height: 40, width: 134, alignSelf: "center", marginVertical: 20 }}>
                    <LinearGradient colors={["#0C86C6", "#00D7BC"]} style={{ borderRadius: 10, flex: 1, flexDirection: "row", justifyContent: "center", alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate("HomePage")} style={{ flex: 1 }}>
                            <Text style={{ color: "white", textAlign: "center", padding: 10, }}>
                                Confirm
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>


            </View>
        </ScrollView >
    )
}

export default LocationPageComponent
