import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    sineupImg: {
        height: "50%",
        width: "100%"
    },
    mainContainer: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 30,
    },
    buttonRow: {
        flexDirection: 'row', // Arrange items horizontally
        justifyContent: 'space-between', // Distribute items evenly along the row
        marginTop: 10, // Optional margin to separate from the image
    },
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingVertical: 20, // Adjust this value to control the top and bottom padding
        paddingHorizontal: 40,

    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        // padding: 10,
        // borderBottomColor: '#ccc',
        // borderBottomWidth: 1,
        // marginBottom: 10,
        borderRadius: 8,
    },
    passwordContainer: {
        flex: 1,
        flexDirection: "row",
        // justifyContent: "space-between",
        alignItems: "center",
        width: '93.5%',
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#E4DFDF',
        marginBottom: 10,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        // marginRight: '10%',
        marginBottom: 10,
    },
    forgotPasswordText: {
        color: 'blue',
    },

    mediaContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: 'center',



    },
    mediaAndTextContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
    },
    toggleContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        // alignItems: "center",
        width: "110%"
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: 'center',
        width: "105.5%",
        height: 75,
        borderRadius: 8,
        backgroundColor: "#f0f1f5",
        marginBottom: 30,
        padding: 10,
        gap: 20,


    },
    notRegisterButton: {
        width: 150,
        height: 40,
        borderRadius: 8,
        padding: 10,
        // backgroundColor: "lineargradient('rgba(12, 134, 198, 1)', 'rgba(0, 215, 188, 1)')",
        color: "white",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        // backgroundColor: "#f0f1f5",

    },
    commonContainer: {
        flex: 1,
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
    },
    registerButtons: {
        width: 150,
        height: 40,
        borderRadius: 8,
        padding: 10,
        // backgroundColor: "lineargradient('rgba(12, 134, 198, 1)', 'rgba(0, 215, 188, 1)')",
        color: "white",
        fontSize: 16,
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",

    },
    commonText: {
        color: 'rgba(18, 13, 38, 1)',
        fontSize: 16,
    },
    signupText: {
        color: 'rgba(2, 132, 199, 1)',
        fontSize: 16,


    },
    inputConatiner: {
        // width: "317px",
        // height: "56px"
    },
    secondContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // width: "80%",
        marginBottom: 0
    },
    emainInput: {
        flex: 1,
        flexDirection: "row",

        alignItems: "center",
        width: '100%',
        padding: 10,
        // borderBottomColor: '#ccc',
        // borderBottomWidth: 1,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#E4DFDF',


    },
    buttonText: {
        color: "#FFFFFF", // Set the text color to white
    },


})