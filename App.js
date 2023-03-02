import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function App() {
    return (
        <View style={ styles.appMap }>
            <View style={ styles.bookContainer }>
                <View style={ styles.bookRegist }>
                    <View>
                        <Text style={{ fontSize: 24, textAlign: 'center', }}>
                            Registrar Nuevo Libro
                        </Text>
                    </View>

                    <View style={ styles.form }>
                        <TextInput style={ styles.input } placeholder='Nombre del Libro' />
                        <TextInput style={ styles.input } placeholder='Autor del Libro' />
                        <TextInput style={ styles.input } placeholder='Editorial del Libro' />
                        <TextInput style={ styles.input } keyboardType="numeric" placeholder='Precio del Libro' />
                    </View>
                </View>

                <View style={styles.buttonPlaceholder}>
                    <Pressable style={[styles.button, {backgroundColor: '#ff5566'}]}>
                        <Text style={{fontSize: 16}}>
                            Cancelar
                        </Text>
                    </Pressable>

                    <Pressable style={[styles.button, {backgroundColor: '#77dd77'}]}>
                        <Text style={{fontSize: 16}}>
                            Aceptar
                        </Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.descContainer}>
                <View style={styles.desc}>
                    <TextInput 
                        placeholder='Agregar Descripcion' 
                        style={[styles.input, {borderRadius: 5, flex: 1, }]} 
                        multiline={true}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appMap:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f0e5d0',
    },
    bookContainer: {
        width: '100%',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookRegist: {
        minHeight: '40%',
        minWidth: '72%',
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#dabf8c',
        elevation: 2
    },
    form: {
        flex: 1,
        justifyContent: 'space-around',
        marginTop: 15,
        marginBottom: 15,
        padding: 5,
    },
    input: {
        padding: 8,
        fontSize: 18,
        borderRadius: 15,
        backgroundColor: '#f4e6cc'
    },
    buttonPlaceholder: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding:2,
        minWidth: '100%',
        marginTop: -25,
        elevation: 3
    },
    button: {
        minwidth: '25%',
        padding: 18,
        borderRadius: 15,
        backgroundColor: 'white',
    },

    descContainer: {
        alignItems: 'center',
        flex: 1,
        padding: 1,
    },

    desc:{
        minHeight: '15%',
        minWidth: '75%',
        padding: 15,
        backgroundColor: '#dabf8c',
        borderRadius: 15,
        elevation: 1,
    }
});