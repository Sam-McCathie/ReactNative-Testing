import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const ModalTesting = () => {
  const [modal, setModal] = useState<boolean>(false);

  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <View>
      <Button title="Show Modal" color="white" onPress={handleModal}></Button>
      <Modal
        visible={modal}
        onRequestClose={handleModal} // function called when the back button is called (android)
      >
        <SafeAreaView>
          <View style={styles.modalBackground}>
            <View style={styles.modal}>
              <Text style={styles.modalHeading}>Hello from the modal</Text>
              <Button title="Close Modal" onPress={handleModal}></Button>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(0,0,153)', // missing opacity?
  },
  modal: {
    width: 300,
    height: 300,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  modalHeading: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '800',
  },
});

export default ModalTesting;
