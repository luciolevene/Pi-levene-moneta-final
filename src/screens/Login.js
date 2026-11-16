import { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, Image, StyleSheet } from "react-native";
import { auth } from "../firebase/config";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");

    useEffect( () => {
        auth.onAuthStateChanged( user => {
            if (user) {
                props.navigation.navigate('HomeMenu', { screen: 'Home' });
            }
        })
    }, [])

    function login(email, password) {
        auth.signInWithEmailAndPassword(email, password)
            .then( response => {
                setLoginError("");
                props.navigation.navigate('HomeMenu', { screen: 'Home' });
            })
            .catch( error => {
                console.log(error);
                setLoginError('Credenciales inválidas.');
            })
    }

    function onSubmit() {
        if (email === "" || password === "") {
            setLoginError("Todos los campos son obligatorios");
            return;
        }

        login(email, password);
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo}
                source={require('../../assets/logo.png')}
                resizeMode='contain' />

            <Text style={styles.titulo}>Iniciar sesión</Text>

            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.field}
                keyboardType='email-address'
                placeholder='Ingresá tu email'
                onChangeText={ text => setEmail(text) }
                value={email} />

            <Text style={styles.label}>Contraseña</Text>
            <TextInput style={styles.field}
                keyboardType='default'
                placeholder='Ingresá tu contraseña'
                secureTextEntry={true}
                onChangeText={ text => setPassword(text) }
                value={password} />

            <Pressable style={styles.boton} onPress={ () => onSubmit() }>
                <Text style={styles.textoBoton}>Iniciar sesión</Text>
            </Pressable>

            <Text style={styles.error}>{loginError}</Text>

            <Pressable onPress={ () => props.navigation.navigate('Register') }>
                <Text style={styles.link}>No tengo cuenta</Text>
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

export default Login
