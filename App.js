import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SignInPage from './SineUpComponent/SignInPage'
import RegistartionComponent from "./RegistrationForm/RegistartionComponent"

import LocationPageComponent from "./HomeLocation/LocationPage"
import HomePageComponent from './Home/HomePageComponent'
import NotificationComponentPage from "./Notification/NotificationComponentPage"
import QRCodeScannerPage from "./QRScanner/QRScannerPage"
import RevoltRestPage from "./RevoltRestPage/RevoltRestPage"


const Stack = createStackNavigator();
const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="RegistartionComponent">
                <Stack.Screen name="RegistrationComponent" component={RegistartionComponent} />
                <Stack.Screen name="SignInPage" component={SignInPage} />
                <Stack.Screen name="HomePage" component={HomePageComponent} />
                <Stack.Screen name="LocationPage" component={LocationPageComponent} />
                <Stack.Screen name="NotificationPage" component={NotificationComponentPage} />
                <Stack.Screen name="QRScannerPage" component={QRCodeScannerPage} />
                <Stack.Screen name="RevoltRestaurantPage" component={RevoltRestPage} />
            </Stack.Navigator>
        </NavigationContainer >
        // <LocationPageComponent />
        // <HeaderComponent />

    )
}

export default App
