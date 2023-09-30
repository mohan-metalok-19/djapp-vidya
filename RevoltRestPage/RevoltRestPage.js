
import React from 'react'
import { Button, FlatList, Image, ScrollView, Text, View } from 'react-native'
import { styles } from "./RevoltRestPageStyles"
import { RadioButton } from 'react-native-paper';
import RadioButtonComponent from '../RadioButton/RadioButtonComponent';
import LinearGradient from 'react-native-linear-gradient';
import CustomIconButton from "../CustomIconButton/CustomIconButton"
import RatingComponent from '../RatingComponent/RatingComponent';


const RevoltRestPage = () => {
    const revotItems = [
        {
            id: 0,
            itemName: "Chicken biryani",
            itemDescription: "Traditional chicken biryani is made by layering marinated chicken at the bottom of a pot followed by anoth... ",
            itemPrice: "₹150"

        },
        {

            id: 1,
            itemName: "Veg biryani",
            itemDescription: "Veg Biryani is an authentic Indian recipe packed full of your favorite rice, veggies, and spices. Made with patience and lot..."
            , itemPrice: "₹120"

        },
        {
            id: 2,
            itemName: "Orange mocktail",
            itemDescription: "Veg Biryani is an authentic Indian recipe packed full of your favorite rice, veggies, and spices. Made with patience and lot..."
            ,
            itemPrice: "₹150"
        },
        {
            id: 3,
            itemName: "Chickenburger",
            itemDescription: "Veg Biryani is an authentic Indian recipe packed full of your favorite rice, veggies, and spices. Made with patience and lot..."
            ,
            itemPrice: "₹150"
        },
        {
            id: 4,
            itemName: "Chickenburger",
            itemDescription: "Veg Biryani is an authentic Indian recipe packed full of your favorite rice, veggies, and spices. Made with patience and lot..."
            ,
            itemPrice: "₹150"
        },
        {
            id: 5,
            itemName: "Chickenburger",
            itemDescription: "Veg Biryani is an authentic Indian recipe packed full of your favorite rice, veggies, and spices. Made with patience and lot..."
            ,
            itemPrice: "₹150"
        }

    ]

    const resTags = [
        {
            id: 0,
            tagName: "All"
        }, {
            id: 1,
            tagName: "Veg"
        }, {
            id: 2,
            tagName: "Non Veg"
        }, {
            id: 3,
            tagName: "Drinks"
        },
        {
            id: 4,
            tagName: "Bestseller"
        }
    ]
    return (
        <View style={styles.revoltResBgCon}>

            <View style={styles.revotResBigImgCon}>
                <Image source={require("../assests/revolt-home-img.png")} />
                <View style={styles.openBgCon}>
                    <View style={styles.openNowCon}>
                        <View>


                            <Text style={styles.openRedTxt}>Open Now</Text>
                            <Text>Revolt Bar N Kitchen</Text>
                            <Text>Jubilee Hills, Hyderabad</Text>
                        </View>
                        {/* <LinearGradient colors={["rgba(12, 134, 198, 1)", "rgba(0, 215, 188, 1)"]} style={{ width: 45, borderRadius: 5, padding: 4 }}>
                            <View style={styles.starCon}>


                                <Text style={{ color: "white", marginRight: 5 }}>4.3</Text>
                                <Image source={require("../assests/star-icon.png")} style={{ height: 15, width: 15 }} />
                            </View>

                        </LinearGradient> */}
                        <RatingComponent />
                    </View>

                    <View style={styles.customRowCon}>
                        <CustomIconButton title={"Book a Table"} />
                        <CustomIconButton title="Song Request" />


                    </View>


                </View>



            </View>

            {/* <View>
                <View>
                    <RadioButton value="All" />

                </View>
                <View>
                    <RadioButton value="Veg" />

                </View>
                <View>
                    <RadioButton value="Non Veg" />

                </View>
                <View>
                    <RadioButton value="Drinks" />

                </View>
                <View>
                    <RadioButton value="BestSeller" />

                </View>


            </View> */}
            <View style={styles.menuLines}>
                <View style={styles.horizontalLine} />
                <Text style={{ color: "rgba(12, 134, 198, 1)", letterSpacing: 10 }}>Menu</Text>
                <View style={styles.horizontalLine} />


            </View>
            <View>
                <FlatList data={resTags} horizontal={true} keyExtractor={item => item.id.toString()} renderItem={({ item }) => (
                    <View style={styles.revoltRestTagCon}>

                        <RadioButtonComponent tagDetails={item} />
                    </View>

                )} />
            </View>

            <View style={{ flexDirection: "column", flexWrap: "wrap" }}>
                <ScrollView>
                    <FlatList
                        data={revotItems}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (

                            <View style={styles.restItem}>
                                <View style={{ width: 250 }}>
                                    <Text style={styles.resItemTitle}>{item.itemName}</Text>
                                    <Text style={styles.resItemDescription}>
                                        {item.itemDescription}
                                    </Text>
                                    <Text style={{ fontWeight: "bold", color: "black" }}>{item.itemPrice}</Text>
                                    <View style={{ width: 120, marginVertical: 15, borderRadius: 15, borderWidth: 0, borderColor: "none", texTransform: "lowercase" }}>
                                        <Button title="Bestseller" color="rgba(231, 192, 78, 1)" />


                                    </View>
                                </View>

                                <Image source={require("../assests/chicken-biry-img.png")} style={{ height: 100, width: 100 }} />



                            </View>


                        )}




                    />
                </ScrollView>
            </View>




        </View>
    )
}

export default RevoltRestPage
