import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    locationMainCon: {
        // margin: 10,
        width: "100%",
        padding: 10,
        backgroundColor: "white",
        flexDirection: "column"


    },
    arrowCon: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 10,
        marginVertical: 10
    },
    yourLocationText: {
        color: "#00D7BC",
        fontSize: 15,

    },
    locationItem: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"


    },
    rowCon: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 10,
        gap: 10
    },
    popularText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "#1C1C1C"




    },
    locationDetailsCon: {
        // border: "0.5px solid #E1E1E1",
        borderColor: "#E1E1E1",
        borderStyle: "solid",
        borderBottomWidth: 1,
        width: "100%",
        marginVertical: 20


    }
})