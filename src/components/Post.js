import { View, Text, Pressable, StyleSheet } from "react-native";
import { db, auth } from "../firebase/config";
import firebase from "firebase";

function Post(props) {
    function likear() {
        if (props.post.data.likes.includes(auth.currentUser.email)) {
            db.collection('posts')
                .doc(props.post.id)
                .update({
                    likes: firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)
                })
                .then(() => {
                    console.log('Like quitado');
                })
            return;
        }

        db.collection('posts')
            .doc(props.post.id)
            .update({
                likes: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
            })
            .then(() => {
                console.log('Like agregado');
            })
    }

    return (
        <View style={styles.card}>
            <Text style={styles.email}>{props.post.data.email}</Text>
            <Text style={styles.descripcion}>{props.post.data.description}</Text>
            <Text style={styles.likes}>Likes: {props.post.data.likes.length}</Text>
            <Pressable onPress={() => likear()}>
                <Text style={styles.accion}>Me gusta</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1a1a1a',
        borderWidth: 1,
        borderColor: '#303030',
        borderStyle: 'solid',
        borderRadius: 8,
        padding: 15,
        marginBottom: 12,
    },
    email: {
        color: '#c8f010',
        fontWeight: 'bold',
        marginBottom: 6,
    },
    descripcion: {
        color: '#f3f4f5',
        fontSize: 16,
        marginBottom: 10,
    },
    likes: {
        color: '#f3f4f5',
    },
    accion: {
        color: '#c8f010',
        fontWeight: 'bold',
        marginTop: 10,
    },
})

export default Post