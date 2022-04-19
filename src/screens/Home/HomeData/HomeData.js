import React from "react";
import { View } from "react-native";
import Title from "../Title/Title";
import Buttons from "../Buttons/Buttons";
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
            <Title />
            <Buttons setScreenInsert={setScreenInsert} setScreenList={setScreenList} />
        </View>
    );
};
