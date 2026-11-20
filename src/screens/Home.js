import { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { db } from "../firebase/config";
import Post from "../components/Post";

function Home(props) {
    const [posteos, setPosteos] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('createdAt', 'desc').onSnapshot(
            docs => {
                let posts = [];
                docs.forEach(doc => {
                    posts.push({
                        id: doc.id,
                        data: doc.data()
                    })
                })
                setPosteos(posts)
            }
        )
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Home</Text>
            <View style={styles.flatlist}>
                <FlatList
                    data={posteos}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <Post post={item} navigation={props.navigation} />}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        paddingHorizontal: 25,
        paddingTop: 60,
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#f3f4f5',
        marginBottom: 15,
    },
    flatlist: {
        width: '100%',
        flex: 1,
    }
})

export default Home