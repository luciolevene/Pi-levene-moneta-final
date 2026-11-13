import { View, Text, Pressable, StyleSheet } from "react-native";

function Login(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Login</Text>

            <Pressable onPress={ () => props.navigation.navigate('Register') }>
                <Text style={styles.link}>No tengo cuenta</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 60,
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    link: {
        marginTop: 15,
        textAlign: 'center',
    },
})

export default Login
