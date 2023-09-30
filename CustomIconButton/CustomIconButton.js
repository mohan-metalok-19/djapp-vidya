
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles } from './CustomIconButtonStyles';


const CustomIconButton = ({ title }) => {
    return (
        <TouchableOpacity style={styles.customMainCon}>
            <Text style={{ marginRight: 10 }}>{title}</Text>
            <FontAwesome5 name={"chevron-circle-right"} size={15} color="grey" />

        </TouchableOpacity>

    )
}

export default CustomIconButton
