import { View, Text, StyleSheet } from "react-native";

function Post(props) {
    return (
        <View style={styles.card}>
            <Text style={styles.email}>{props.post.data.email}</Text>
            <Text style={styles.descripcion}>{props.post.data.description}</Text>
            <Text style={styles.likes}>Likes: {props.post.data.likes.length}</Text>
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
})

export default Post