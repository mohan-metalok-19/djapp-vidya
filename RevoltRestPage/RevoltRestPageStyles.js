import { StyleSheet } from "react-native";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    revoltResBgCon: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
        width: "100%",



    },
    restItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        // alignItems: "center",
        borderBottomColor: "#E1E1E1",
        borderBottomWidth: 2,
        borderStyle: "dotted",
        padding: 10,
        marginRight: 0,
        width: "100%",
        marginVertical: 10,

    }
    ,
    resItemTitle: {
        color: "black",
        fontWeight: "bold"
    }
    , resItemDescription: {
        color: "grey"
    },
    sellerBtn: {
        color: "white",
        borderStyle: "solid",
        borderWidth: 0,
        width: 60,
        height: 10,
        padding: 2,
        borderRadius: 3,
        borderWidth: 0,
        borderColor: "none",
        marginVertical: 10,

    },
    itemImgCon: {
        // height: "auto",
        // width: "auto",
        flex: 1,
        flexDirection: "column",

    },
    revoltRestTagCon: {
        borderColor: "grey",
        borderWidth: 1,
        padding: 3,
        borderRadius: 20,
        margin: 10,
        // height: 36,
        // width: 95
    },
    horizontalLine: {
        borderBottomColor: 'rgba(12, 134, 198, 1)',
        borderBottomWidth: 1,
        marginVertical: 10,
        width: 100
    },
    menuLines: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginVertical: 10

    }, starCon: {
        flexDirection: "row",
        alignItems: "center",

    }, openRedTxt: {
        color: "red"
    },
    openNowCon: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }, customRowCon: {
        flexDirection: "row",

        alignItems: "center"
    },
    openBgCon: {
        backgroundColor: "white",
        height: 150, width: 400,
        borderRadius: 15,
        borderWidth: 0,
        borderColor: "none",
        padding: 20,
        position: "absolute",
        flexDirection: "column",
        top: "65%",
        marginHorizontal: 7

    }, revotResBigImgCon: {
        position: "relative",
    }
})