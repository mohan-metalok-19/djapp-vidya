import React, { useState } from 'react'
import { ScrollView, View, Image, TouchableOpacity, TextInput, Switch, Text, Linking } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { styles } from '../SineUpComponent/signInstyles'

const RegistartionComponent = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [userEmailId, setUserEmailId] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [fullName, setFullName] = useState("")
    const [isSignUpClicked, setIsSignUpClicked] = useState(true)
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };

    const handleSignFormPress = () => {
        // navigation.navigate('SignForm');
        navigation.navigate('SignInPage');

    };

    const SignUpSignInBtnClicked = () => {
        setIsSignUpClicked(false)
        navigation.navigate("SignInPage")

    }
    const SignUpPageSignUpClicked = () => {
        setIsSignUpClicked(true)
        navigation.navigate("RegistrationComponent")

    }
    const handleFacebook = async () => {
        const url = "https://www.facebook.com/people/Metalok/100088665795146/"
        // Linking.openURL("https://www.facebook.com/people/Metalok/100088665795146/")
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            console.log(`Cannot open URL: ${url}`);
        }
    }


    return (
        <ScrollView>

            <View style={styles.container}>
                <Image
                    source={require('../assests/sineup.png')} // Path to your image
                    style={styles.image}
                />
                <View style={styles.buttonsContainer}>

                    <LinearGradient colors={isSignUpClicked ? ['#f0f1f5', '#f0f1f5'] : ['#0C86C6', '#00D7BC']} style={{ borderRadius: 18 }}>


                        <TouchableOpacity
                            onPress={SignUpSignInBtnClicked}
                            style={isSignUpClicked ? styles.notRegisterButton : styles.registerButtons}

                        >
                            <Text style={{ color: isSignUpClicked ? "#888888" : "white" }}>Sign In</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient colors={isSignUpClicked ? ['#0C86C6', '#00D7BC'] : ['#f0f1f5', '#f0f1f5']} style={{ borderRadius: 18 }}>
                        <TouchableOpacity
                            onPress={SignUpPageSignUpClicked}
                            style={isSignUpClicked ? styles.registerButtons : styles.notRegisterButton}

                        >
                            <Text style={{ color: isSignUpClicked ? "white" : "#888888" }} >Sign Up</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

                <View style={styles.secondContainer}>
                    <Text style={{ marginBottom: 30, color: "#1C1C1C", fontWeight: "bold", fontSize: 22 }} >Sign Up To Your Account</Text>
                    <View style={styles.emainInput}>
                        <Image source={require('../assests/Profile.png')} />

                        <TextInput
                            style={styles.input}
                            placeholder="Full name"
                            keyboardType="default"
                            value={fullName}
                            onChangeText={(txt) => setFullName(txt)}
                        />

                    </View>
                    <View style={styles.emainInput}>
                        <Image source={require('../assests/Mail.png')} />

                        <TextInput
                            style={styles.input}
                            placeholder="abc@email.com"
                            keyboardType="email-address"
                            value={userEmailId}
                            onChangeText={(txt) => setUserEmailId(txt)}
                        />

                    </View>
                    <View style={styles.passwordContainer}>
                        <Image source={require('../assests/password.png')} />
                        <TextInput
                            style={styles.input}
                            placeholder="Your password"
                            secureTextEntry
                            value={userPassword}
                            onChangeText={(txt) => setUserPassword(txt)}
                        />
                        <View>

                            <Image source={require('../assests/password-security.png')} />

                        </View>

                    </View>
                    <View style={styles.passwordContainer}>
                        <Image source={require('../assests/password.png')} />
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm password"
                            secureTextEntry
                            value={confirmPassword}
                            onChangeText={(txt) => setConfirmPassword(txt)}
                        />
                        <View>
                            <Image source={require('../assests/password-security.png')} />
                        </View>

                    </View>
                    <View style={styles.toggleContainer}>
                        <View style={styles.commonContainer}>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            <Text>Remember Me</Text>
                        </View>
                        <TouchableOpacity style={styles.forgotPassword}>
                            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={styles.buttonContainer}>
                        <Image source={require("../assests/Button-Color.png")} />
                    </View> */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("SignInPage")}>
                        <Image source={require("../assests/Button-Color.png")} />
                    </TouchableOpacity>
                    <View style={styles.mediaAndTextContainer} >
                        <Text style={{ color: "rgba(28, 28, 28, 1)", fontWeight: 700 }}>Or Continue With</Text>
                        <View style={styles.mediaContainer}>
                            <TouchableOpacity onPress={handleFacebook}>
                                <Image source={require("../assests/Face-book.png")} />


                            </TouchableOpacity>
                            <Image source={require("../assests/Google.png")} />
                            <Image source={require("../assests/Apple.png")} />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: -55, marginBottom: 20 }}>
                    <Text style={styles.commonText}>
                        Already have an account?

                        <Text style={styles.signupText} > Sign In</Text>
                    </Text>
                </View>
            </View>
        </ScrollView >
    )
}

export default RegistartionComponent
