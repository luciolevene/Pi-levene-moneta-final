import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { db, auth } from "../firebase/config";

function NuevoPost(props) {
    const [description, setDescription] = useState("");

    function onSubmit() {
        db.collection('posts').add({
            email: auth.currentUser.email,
            description: description,
            createdAt: Date.now(),
            likes: [],
        })
            .then(() => {
                setDescription("");
                props.navigation.navigate('Home');
            })
            .catch(error => console.log(error))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Crear nuevo post</Text>

            <Text style={styles.label}>Descripción</Text>
            <TextInput style={styles.field}
                keyboardType='default'
                placeholder='Escribí tu post...'
                onChangeText={text => setDescription(text)}
                value={description} />

            <Pressable style={styles.boton} onPress={() => onSubmit()}>
                <Text style={styles.textoBoton}>Publicar</Text>
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
        color: '#f3f4f5',
        fontSize: 15,
        marginTop: 10,
    },
    field: {
        backgroundColor: '#1a1a1a',
        color: '#f3f4f5',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#303030',
        borderStyle: 'solid',
        borderRadius: 8,
        marginVertical: 8,
    },
    boton: {
        backgroundColor: '#c8f010',
        paddingVertical: 14,
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 20,
    },
    textoBoton: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default NuevoPost