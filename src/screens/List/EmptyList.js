import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Styles from "./Styles";

export default function EmptyList({ setScreenHome }) {
    return (
        <View style={Styles.viewEmptyList}>
            <Text style={Styles.titleEmptyList}>Nenhuma música salva</Text>
            <TouchableOpacity style={Styles.buttonEmptyList}
                onPress={() => setScreenHome()}>
                <Text style={Styles.buttonTextEmptyList}>Voltar para o Menu</Text>
            </TouchableOpacity>
        </View>
    );
};
