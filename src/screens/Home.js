import { View, Text, StyleSheet } from "react-native";

function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Home</Text>
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
})

export default Home
