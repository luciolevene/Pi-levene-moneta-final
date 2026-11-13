import { useState } from "react";
import { View, Text, TextInput, Pressable, Image, StyleSheet } from "react-native";
import { auth, db } from "../firebase/config";

function Register(props) {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [registerError, setRegisterError] = useState("");

    function register(email, password, userName) {
        auth.createUserWithEmailAndPassword(email, password)
            .then( response => {
                return db.collection('users').add({
                    email: auth.currentUser.email,
                    userName: userName,
                    createdAt: Date.now(),
                })
            })
            .then( () => {
                setRegisterError("");
                auth.signOut();
                props.navigation.navigate('Login');
            })
            .catch( error => {
                console.log(error);
                setRegisterError(error.message);
            })
    }

    function onSubmit() {
        if (email === "" || userName === "" || password === "") {
            setRegisterError("Todos los campos son obligatorios");
            return;
        }

        register(email, password, userName);
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo}
                source={require('../../assets/logo.png')}
                resizeMode='contain' />

            <Text style={styles.titulo}>Crear cuenta</Text>

            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.field}
                keyboardType='email-address'
                placeholder='Ingresá tu email'
                placeholderTextColor='#8a8a8a'
                onChangeText={ text => setEmail(text) }
                value={email} />

            <Text style={styles.label}>Nombre de usuario</Text>
            <TextInput style={styles.field}
                keyboardType='default'
                placeholder='Ingresá tu nombre de usuario'
                placeholderTextColor='#8a8a8a'
                onChangeText={ text => setUserName(text) }
                value={userName} />

            <Text style={styles.label}>Contraseña</Text>
            <TextInput style={styles.field}
                keyboardType='default'
                placeholder='Ingresá tu contraseña'
                placeholderTextColor='#8a8a8a'
                secureTextEntry={true}
                onChangeText={ text => setPassword(text) }
                value={password} />

            <Pressable style={styles.boton} onPress={ () => onSubmit() }>
                <Text style={styles.textoBoton}>Registrarse</Text>
            </Pressable>

            <Text style={styles.error}>{registerError}</Text>

            <Pressable onPress={ () => props.navigation.navigate('Login') }>
                <Text style={styles.link}>Ya tengo cuenta</Text>
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
    logo: {
        height: 90,
        marginBottom: 20,
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
    error: {
        color: '#e5484d',
        marginTop: 12,
        textAlign: 'center',
    },
    link: {
        marginTop: 5,
        textAlign: 'center',
        color: '#c8f010',
    },
})

export default Register
