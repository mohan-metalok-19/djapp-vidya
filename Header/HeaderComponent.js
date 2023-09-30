

import React from 'react'
import { styles } from './HeaderComponentStyles'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

const HeaderComponent = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.headerMainCon}>
            <TouchableOpacity onPress={() => navigation.navigate("LocationPage")}>
                <View >
                    <View style={styles.rowCon}>

                        <Text style={styles.rowBoldTxt}>Home</Text>
                        <Image source={require('../assests/arrow-down.png')} style={{ height: 20, width: 20 }} />

                    </View>
                    <View>


                        <Text>Gachibowli, Hyderabad</Text>

                    </View>

                </View>
            </TouchableOpacity>
            <View style={styles.rowCon}>
                <TouchableOpacity onPress={() => navigation.navigate("QRScannerPage")}>


                    <Image source={require('../assests/cil_qr-code.png')} style={{ height: 24, width: 24 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("NotificationPage")}>
                    <Image source={require('../assests/bell-_1_.png')} style={{ height: 24, width: 24 }} />


                </TouchableOpacity>

            </View>
        </View>
    )
}

export default HeaderComponent
