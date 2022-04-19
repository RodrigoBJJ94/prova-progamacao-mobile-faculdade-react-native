import React from "react";
import { View, Text } from "react-native";
import EmptyList from "./EmptyList";
import Buttons from "./Buttons";
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

    if (name !== "" || artist !== "" || album !== "" || year !== "") {
        return (
            <View style={Styles.viewList}>
                <Text style={Styles.titleList}>Lista das Músicas</Text>
                <Text style={Styles.nameMusicList}>Nome da Música: {name}</Text>
                <Text style={Styles.musicList}>Artista: {artist}</Text>
                <Text style={Styles.musicList}>Álbum: {album}</Text>
                <Text style={Styles.musicList}>Ano: {year}</Text>
                <Buttons setScreenHome={setScreenHome} musicDelete={musicDelete} />
            </View>
        );
    } else {
        return <EmptyList setScreenHome={setScreenHome} />
    };
};
