import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Styles from "./Styles";

export default function Buttons({ setScreenInsert, setScreenList }) {
    return (
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
    );
};
