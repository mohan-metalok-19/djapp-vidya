

import React from 'react'
import { Image, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { styles } from "../RevoltRestPage/RevoltRestPageStyles"


const RatingComponent = () => {
    return (
        <LinearGradient colors={["rgba(12, 134, 198, 1)", "rgba(0, 215, 188, 1)"]} style={{ width: 45, borderRadius: 5, padding: 4 }}>
            <View style={styles.starCon}>


                <Text style={{ color: "white", marginRight: 5 }}>4.3</Text>
                <Image source={require("../assests/star-icon.png")} style={{ height: 15, width: 15 }} />
            </View>

        </LinearGradient>
    )
}

export default RatingComponent
