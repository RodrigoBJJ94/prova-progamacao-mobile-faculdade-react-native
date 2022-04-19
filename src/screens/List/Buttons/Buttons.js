import React from "react";
import { TouchableOpacity, Text, Alert } from "react-native";
import Styles from "./Styles";

export default function Buttons({ musicDelete, setScreenHome }) {
    function confirmMusicDelete() {
        Alert.alert(
            "Excluir Música", "Você deseja realmente exluir a música?",
            [{
                text: "Cancelar"
            },
            {
                text: "OK", onPress: () => musicDelete()
            }]
        );
    };

    return (
        <>
            <TouchableOpacity style={Styles.buttonDelete}
                onPress={() => confirmMusicDelete()}>
                <Text style={Styles.buttonTextDelete}>Excluir Música</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonList}
                onPress={() => setScreenHome()}>
                <Text style={Styles.buttonTextList}>Voltar para o Menu</Text>
            </TouchableOpacity>
        </>
    );
};
