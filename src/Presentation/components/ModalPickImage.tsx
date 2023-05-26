import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { RounderButton } from './RounderButton';


interface Props {
    openGallery: () => void,
    openCamera: () => void,
    modalUseState: boolean,
    setModalUseState: React.Dispatch<React.SetStateAction<boolean>>
}


export const ModalPickImage = ({ openCamera, openGallery, setModalUseState, modalUseState }: Props) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalUseState}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalUseState(!modalUseState);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>Selecciona una opcion</Text>
                        <View style={styles.buttonContainer}>
                            <RounderButton
                                onPress={() => {
                                    openGallery();
                                    setModalUseState(false);
                                }}
                                text='Seleccionar de la galeria'
                            />
                        </View>

                        <View style={styles.buttonContainer}>
                            <RounderButton
                                onPress={() => {
                                    openCamera();
                                    setModalUseState(false);
                                }}
                                text='Abrir camara'
                            />
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: 250,
        height1: 220,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        // padding: 25,
        paddingTop: 35,
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 15,
        width: '100%',
    },
});


