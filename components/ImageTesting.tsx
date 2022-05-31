import React from 'react';
import {ImageBackground, Text, Image, StyleSheet} from 'react-native';

const ImageTesting: React.FC = () => {
  return (
    <ImageBackground
      source={{uri: 'https://wallpaperaccess.com/full/797185.png'}}
      style={styles.backgroundImage}>
      {/*Local import*/}
      <Image
        source={require('../images/ferg.png')}
        resizeMode="stretch"
        style={styles.localImage}
      />

      {/*Import From Web -> add width and height property*/}
      <Image
        source={{uri: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg'}}
        style={styles.uriImage}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  localImage: {
    marginTop: 50,
  },
  uriImage: {
    width: 100,
    height: 100,
    marginTop: 50,
  },
});

export default ImageTesting;
