import React, { useState } from "react";
import HomeData from "./HomeData";
import Insert from "../Insert/Insert";
import List from "../List/List";

export default function Home() {
    const [screen, setScreen] = useState("Home");
    const [name, setName] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [year, setYear] = useState("");

    if (screen === "Home") {
        return getScreenHome();
    } else if (screen === "Insert") {
        return getScreenInsert();
    } else if (screen === "List") {
        return getScreenList();
    };

    function getScreenHome() {
        return (
            <HomeData setScreen={setScreen} getScreenInsert={getScreenInsert}
                getScreenList={getScreenList} name={name} artist={artist}
                album={album} year={year} setName={setName} setArtist={setArtist}
                setAlbum={setAlbum} setYear={setYear} />
        );
    };

    function getScreenInsert() {
        return (
            <Insert name={name} artist={artist} album={album} year={year}
                setScreen={setScreen} setYear={setYear} getScreenHome={getScreenHome}
                setArtist={setArtist} setAlbum={setAlbum} setName={setName} />
        );
    };

    function getScreenList() {
        return (
            <List name={name} artist={artist} album={album} setArtist={setArtist}
                year={year} setName={setName} setAlbum={setAlbum} setYear={setYear}
                setScreen={setScreen} getScreenHome={getScreenHome} />
        );
    };
};
