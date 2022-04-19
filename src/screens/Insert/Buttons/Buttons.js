import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Styles from "./Styles";

export default function Buttons({ insertScreenHome, cancelInsertMusic }) {
    return (
        <>
            <TouchableOpacity style={Styles.buttonInsert}
                onPress={() => insertScreenHome()}>
                <Text style={Styles.buttonTextInsert}>Concluir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonCancel}
                onPress={() => cancelInsertMusic()}>
                <Text style={Styles.buttonTextCancel}>Cancelar</Text>
            </TouchableOpacity>
        </>
    );
};
