    import { useState, useEffect } from "react";
    import { View, Text, Pressable, FlatList, StyleSheet } from "react-native";
    import { db, auth } from "../firebase/config";
    import Post from "../components/Post";

    function Profile(props) {
        const [email, setEmail] = useState("");
        const [userName, setUserName] = useState("");
        const [posteos, setPosteos] = useState([]);

        useEffect(() => {
            setEmail(auth.currentUser.email);

            db.collection('users').where('email', '==', auth.currentUser.email).onSnapshot(
                docs => {
                    docs.forEach(doc => {
                        setUserName(doc.data().userName)
                    })
                }
            )

            db.collection('posts').where('email', '==', auth.currentUser.email).onSnapshot(
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

        function logout() {
            auth.signOut()
                .then(() => {
                    props.navigation.navigate('Login');
                })
        }

        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Mi Perfil</Text>

                <Text style={styles.label}>Nombre de usuario</Text>
                <Text style={styles.dato}>{userName}</Text>

                <Text style={styles.label}>Email</Text>
                <Text style={styles.dato}>{email}</Text>

                <Text style={styles.label}>Mis posteos</Text>
                <View style={styles.flatlist}>
                    <FlatList
                        data={posteos}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => <Post post={item} />}
                    />
                </View>

                <Pressable style={styles.boton} onPress={() => logout()}>
                    <Text style={styles.textoBoton}>Cerrar sesión</Text>
                </Pressable>
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
        label: {
            color: '#c8f010',
            fontSize: 15,
            marginTop: 10,
        },
        dato: {
            color: '#f3f4f5',
            fontSize: 18,
            marginBottom: 5,
        },
        flatlist: {
            width: '100%',
            flex: 1,
            marginTop: 8,
        },
        boton: {
            backgroundColor: '#c8f010',
            paddingVertical: 14,
            alignItems: 'center',
            borderRadius: 8,
            marginVertical: 20,
        },
        textoBoton: {
            color: '#000000',
            fontSize: 16,
            fontWeight: 'bold',
        },
    })

    export default Profile