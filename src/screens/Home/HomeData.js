import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import Styles from "./Styles";

export default function HomeData({ setScreen, getScreenInsert, getScreenList }) {
    function setScreenInsert() {
        setScreen("Insert");
        return getScreenInsert();
    };

    function setScreenList() {
        setScreen("List");
        return getScreenList();
    };

    return (
        <View style={Styles.viewHome}>
            <Text style={Styles.titleHome}>Menu</Text>
            <View style={Styles.viewButtons}>
                <TouchableOpacity style={Styles.insertButton}
                    onPress={() => setScreenInsert()}>
                    <Text style={Styles.insertButtonText}>Incluir</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.listButton}
                    onPress={() => setScreenList()}>
                    <Text style={Styles.listButtonText}>Listar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
