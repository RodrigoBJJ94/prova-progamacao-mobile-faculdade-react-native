import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import Styles from "./Styles";

export default function List({ name, artist, album, year, setScreen,
    getScreenHome, setName, setArtist, setAlbum, setYear }) {
    function setScreenHome() {
        setScreen("Home");
        return getScreenHome();
    };

    function musicDelete() {
        setName("")
        setArtist("");
        setAlbum("");
        setYear("");
    };

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

    if (name !== "" || artist !== "" || album !== "" || year !== "") {
        return (
            <View style={Styles.viewList}>
                <Text style={Styles.titleList}>Lista das Músicas</Text>
                <Text style={Styles.nameMusicList}>Nome da Música: {name}</Text>
                <Text style={Styles.musicList}>Artista: {artist}</Text>
                <Text style={Styles.musicList}>Álbum: {album}</Text>
                <Text style={Styles.musicList}>Ano: {year}</Text>
                <TouchableOpacity style={Styles.buttonDelete}
                    onPress={() => confirmMusicDelete()}>
                    <Text style={Styles.buttonTextDelete}>Excluir Música</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.buttonList}
                    onPress={() => setScreenHome()}>
                    <Text style={Styles.buttonTextList}>Voltar para o Menu</Text>
                </TouchableOpacity>
            </View>
        );
    } else {
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
};
