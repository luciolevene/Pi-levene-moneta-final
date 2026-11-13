import { View, Text, StyleSheet } from "react-native";

function NuevoPost() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Crear nuevo post</Text>
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
})

export default NuevoPost
