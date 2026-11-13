import { View, Text, Pressable, StyleSheet } from "react-native";

function Register(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Registro</Text>

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
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#f3f4f5',
        marginBottom: 15,
    },
    link: {
        marginTop: 15,
        textAlign: 'center',
        color: '#4e95ff',
    },
})

export default Register
