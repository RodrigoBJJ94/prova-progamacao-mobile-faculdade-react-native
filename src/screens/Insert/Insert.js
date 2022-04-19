import React from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import Styles from "./Styles";

export default function Insert({ name, artist, album, year, setScreen,
    getScreenHome, setName, setArtist, setAlbum, setYear }) {

    function insertScreenHome() {
        if (name !== "" || artist !== "" || album !== "" || year !== "") {
            Alert.alert("A música foi salva!");
            setScreen("Home");
            return getScreenHome();
        } else {
            Alert.alert("Nenhuma música foi salva!");
        };
    };

    function cancelInsertMusic() {
        setScreen("Home");
        return getScreenHome();
    };

    return (
        <View style={Styles.viewInsert}>
            <Text style={Styles.titleInsert}>Cadastro de Música</Text>
            <Text style={Styles.textsInsert}>Nome da Música</Text>
            <TextInput style={Styles.inputInsert}
                onChangeText={text => setName(text)} />
            <Text style={Styles.textsInsert}>Artista</Text>
            <TextInput style={Styles.inputInsert}
                onChangeText={text => setArtist(text)} />
            <Text style={Styles.textsInsert}>Álbum</Text>
            <TextInput style={Styles.inputInsert}
                onChangeText={text => setAlbum(text)} />
            <Text style={Styles.textsInsert}>Ano</Text>
            <TextInput style={Styles.inputInsert}
                onChangeText={text => setYear(text)} />
            <TouchableOpacity style={Styles.buttonInsert}
                onPress={() => insertScreenHome()}>
                <Text style={Styles.buttonTextInsert}>Concluir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonCancel}
                onPress={() => cancelInsertMusic()}>
                <Text style={Styles.buttonTextCancel}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    );
};
