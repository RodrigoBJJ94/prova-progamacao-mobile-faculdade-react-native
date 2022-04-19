import React from "react";
import { View, Text, TextInput, Alert } from "react-native";
import Title from "../Title/Title";
import Buttons from "../Buttons/Buttons";
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
            <Title />
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
            <Buttons insertScreenHome={insertScreenHome}
                cancelInsertMusic={cancelInsertMusic} />
        </View>
    );
};
