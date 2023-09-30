import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './RadioBtnStyles'

const RadioButtonComponent = ({ tagDetails }) => {
    const { id, tagName } = tagDetails

    return (
        <View style={styles.customRadioBtn}>


            <Text style={{ color: "black" }}>{tagName}</Text>
            <View style={styles.radioBtn}>
                {tagName == "Non Veg" ? (
                    <View style={styles.radioRedBg}></View>

                ) : <View style={styles.radioBg}></View>}

            </View>

        </View>

    )
}

export default RadioButtonComponent
