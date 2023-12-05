// React Native Temel Paketler
import {  View, Text, StyleSheet, Dimensions, Button, ActivityIndicator, ScrollView, TextInput } from "react-native";

// React Native Hooks
import { useEffect, useState } from "react";

// Modal
import Modal from "react-native-modal";

// API
import newsApi from "../../util/newsApi";

const screenWidth = Dimensions.get("window").width;
function CommentModal({ isVisible, closeModalHandler, id }) {
    const [comments, setComments] = useState();

    useEffect(() => {
        newsApi.getComments(id, null).then((respondData) => setComments(respondData));
      }, []);

    let content = <ActivityIndicator />;

    if(comments) {
        const text = comments.length > 0 ? "Yorum yaz." : "Yorum yok. Bir tane sen yaz.";
        content = (
            <View style={styles.modalInternalContainer}>
                <ScrollView>
                    {comments.map((item) => (CommentItem({ id: id, name: item.isim, comment: item.yorum, datetime: item.tarih })))}
                </ScrollView>
                <Text style={styles.text}>{text}</Text>
                <View style={styles.inputsContainer}>
                    <TextInput placeholder="Adınızı girin" style={[styles.nameInput, styles.text]}/>
                    <TextInput placeholder="Yorumunuzu girin" style={[styles.commentInput ,styles.text]} multiline={true} numberOfLines={10}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Yorum yap" onPress={null}/>
                    <Button title="Kapat" onPress={closeModalHandler}/>
                </View>
            </View>
        );
    }
    return(
        <View style={styles.modalContainer}>
            <Modal isVisible={isVisible} style={styles.modalStyle} swipeDirection={["down"]} onSwipeComplete={closeModalHandler} onBackdropPress={closeModalHandler}>
                {content}
            </Modal>
        </View>
    );
}

function CommentItem({ id, name, comment, datetime }) {
    const dateTime = new Date(datetime).toLocaleDateString();
    return(
        <View key={id} style={styles.commentItemRootContainer}>
            <Text style={styles.text}>{dateTime}</Text>
            <View style={styles.textContainer}>
                <Text style={styles.text}>İsim: </Text>
                <Text style={styles.text}>{name}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Yorum: </Text>
                <Text style={styles.text}>{comment}</Text>
            </View>
        </View>
    );
}

export default CommentModal;

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
    commentItemRootContainer: {
        backgroundColor: "#d5d3d3",
        padding: 12,
        borderRadius: 8,
        marginVertical: 8,
    },
    text: {
        color: "black",
        fontSize: 18,
    },
    textContainer: {
        flexDirection: "row",
        marginTop: 8,
        flexWrap: "wrap",
    },
    nameInput: {
        backgroundColor: "#dad6d6",
        marginVertical: 8,
        padding: 8,
    },
    commentInput: {
        backgroundColor: "#dad6d6",
        marginVertical: 8,
        padding: 8,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 16,
    },
});