// React Native Temel Paketler
import {  View, Text, StyleSheet, Dimensions, Button } from "react-native";

// Slider
import Slider from "@react-native-community/slider";

// Context
import { Context } from "../../store/context";

// React Native Hooks
import { useContext, useState } from "react";

// Modal
import Modal from "react-native-modal";

const screenWidth = Dimensions.get("window").width;
function FontModal({ isVisible, closeModalHandler }) {
    const ctx = useContext(Context);
    const [fontSize, setFontSize] = useState({ smallTextFontSize: ctx.fontSizes.smallTextFontSize, bigTextFontSize: ctx.fontSizes.bigTextFontSize });

    function onFontSizeChangeHandler(fontSize) {
        setFontSize({ smallTextFontSize: fontSize, bigTextFontSize: fontSize + 2 })
    }

    function onSaveButtonHandler() {
        ctx.manageFontSizes(fontSize.smallTextFontSize);
        closeModalHandler();
    }

    const sliderValue = fontSize.smallTextFontSize != ctx.fontSizes.smallTextFontSize ? fontSize.smallTextFontSize : ctx.fontSizes.smallTextFontSize;
    return(
        <View style={styles.modalContainer}>
            <Modal isVisible={isVisible} style={styles.modalStyle} swipeDirection={["down"]} onSwipeComplete={closeModalHandler} onBackdropPress={closeModalHandler}>
                <View style={styles.modalInternalContainer}>
                    <Text style={[styles.sliderText, { fontSize: fontSize.smallTextFontSize }]}>Yazı boyutunu değiştirmek için sürükle</Text>
                    <Slider   
                        minimumValue={18}
                        maximumValue={32}
                        value={sliderValue}
                        minimumTrackTintColor={ctx.panelSettings.themePrimaryColor}
                        maximumTrackTintColor="#DDDCDB"
                        step={1}
                        onValueChange={onFontSizeChangeHandler}
                        tapToSeek={true}
                    />
                    <View style={styles.buttonContainer}>
                        <Button title="Kaydet" onPress={onSaveButtonHandler}/>
                        <Button title="İptal" onPress={closeModalHandler}/>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default FontModal;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
    },
    modalStyle: {
        justifyContent: "flex-end",
        margin: 0,
    },
    modalInternalContainer: {
        backgroundColor: "white",
        borderRadius: 8,
        padding: 24,
        width: screenWidth
    },
    sliderText: {
        textAlign: "center",
        color: "black",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
});