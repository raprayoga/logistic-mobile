import React, {useState} from 'react';
import TakePicture from './TakePicture';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';

export default function AccessPicture() {
  const [img, setImg] = useState(null);

  const onPicture = data => {
    setImg('data:image/png;base64,' + data.base64);
  }

  const onBackToCamera = () => {
    setImg(null);
  }

  return (
    <>
      <View style={styles.container}>
      {img ? (
      <>
        <Image source={{ uri: img }} style={styles.preview}></Image>
        <View style={styles.bottomBar}>
              <TouchableOpacity onPress={onBackToCamera} style={{ backgroundColor: '#fff', ...styles.capture }}>
            <Text style={{ fontSize: 14 }}> ULANGI </Text>
          </TouchableOpacity>
              <TouchableOpacity onPress={onBackToCamera} style={{ backgroundColor: '#20C997', ...styles.capture }}>
            <Text style={{ fontSize: 14 }}> SUBMIT </Text>
          </TouchableOpacity>
        </View>
      </>
      ) : (
        <TakePicture onPicture={(e) => onPicture(e)}></TakePicture>
      )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  bottomBar: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  }
});