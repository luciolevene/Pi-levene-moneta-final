import { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, FlatList, StyleSheet } from "react-native";
import { db, auth } from "../firebase/config";

function Comentarios(props) {
  const { id } = props.route.params;
  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    db.collection('comments').where('postId', '==', id).onSnapshot(
      docs => {
        let lista = [];
        docs.forEach(doc => {
          lista.push({
            id: doc.id,
            data: doc.data()
          })
        })
        setComentarios(lista)
      }
    )
  }, [id])

  function onSubmit() {
    db.collection('comments').add({
      postId: id,
      email: auth.currentUser.email,
      comment: comentario,
      createdAt: Date.now(),
    })
      .then(() => {
        setComentario("");
      })
      .catch(error => console.log(error))
  }

  return (
    <View style={styles.container}>
      <View style={styles.flatlist}>
        <FlatList
          data={comentarios}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.email}>{item.data.email}</Text>
              <Text style={styles.texto}>{item.data.comment}</Text>
            </View>
          )}
        />
      </View>

      <TextInput style={styles.field}
        keyboardType='default'
        placeholder='Escribí un comentario'
        onChangeText={text => setComentario(text)}
        value={comentario} />

      <Pressable style={styles.boton} onPress={() => onSubmit()}>
        <Text style={styles.textoBoton}>Comentar</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  flatlist: {
    width: '100%',
    flex: 1,
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#303030',
    borderStyle: 'solid',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  email: {
    color: '#c8f010',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  texto: {
    color: '#f3f4f5',
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
    marginBottom: 20,
  },
  textoBoton: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default Comentarios