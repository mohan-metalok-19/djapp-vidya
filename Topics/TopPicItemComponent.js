

import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'

const TopPicItemComponent = () => {
    const picksArr = [{
        id: 0,

    }, {
        id: 1,

    },
    { id: 2 },
    {
        id: 3
    }, {
        id: 4
    }]
    return (
        <View style={{ flexWrap: "wrap", marginVertical: 10, flexDirection: "column", }}>
            <Text style={{ fontWeight: "bold", color: "black" }}>Top Picks</Text>
            <FlatList numColumns={3} horizontal={false} data={picksArr} keyExtractor={item => item.id.toString()} renderItem={({ item }) => (
                <View style={{ flexDirection: "column" }}>
                    <Image source={require("../assests/cafe-explore-img.png")}
                    />
                </View>
            )} />


        </View>
    )
}

export default TopPicItemComponent
