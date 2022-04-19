import { StyleSheet } from "react-native";

export default StyleSheet.create({
    viewHome: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    titleHome: {
        color: "#000000",
        fontSize: 60,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 120,
        marginBottom: 150,
    },
    viewButtons: {
        alignItems: "center",
    },
    insertButton: {
        backgroundColor: "#256e96",
        width: 250,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 80,
        borderRadius: 10,
    },
    insertButtonText: {
        color: "#000000",
        fontSize: 30,
    },
    listButton: {
        backgroundColor: "#ffde01",
        width: 250,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 60,
        borderRadius: 10,
    },
    listButtonText: {
        color: "#000000",
        fontSize: 30,
    }
});
