

import React, { useState } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { Text, TouchableOpacity, View } from 'react-native';
import deprecatedPropTypes from 'deprecated-react-native-prop-types'; // Add this import

// QRCodeScanner.propTypes = {
//     ...QRCodeScanner.propTypes,
//     cameraProps: deprecatedPropTypes.style,
// };



const QRCodeScannerPage = () => {
    const [userData, setUserData] = useState("")
    // const handleQRCodeRead = (event) => {
    //     const scannedValue = event.data;
    //     setUserData(scannedValue);

    // }
    return (
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <QRCodeScanner
                onRead={(({ data }) => setUserData(data))}
                flashMode={RNCamera.Constants.FlashMode.torch} // if we want turoff Falsh , we can remove this
                showMarker={true} // to show rectangular Box
                reactivate={true}
                reactivateTimeout={5000}
                bottomContent={
                    <View>
                        <Text style={{ fontWeight: "bold", color: "black", padding: 10, margin: 10 }}>QR Scanner {userData} </Text>
                    </View>
                }
                topContent={

                    <View>
                        <Text style={{
                            color: "black", fontWeight: "bold", padding: 10, margin: 10, backgroundColor: "grey"
                        }}>Scan QR</Text>
                    </View>
                }
            // cameraStyle={{ flex: 1 }}

            />

        </View>
    )
}

export default QRCodeScannerPage
