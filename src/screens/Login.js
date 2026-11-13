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
        color: '#c8f010',
    },
})

export default Login
