import AsyncStorage from '@react-native-async-storage/async-storage';

const _storeData = async (key, value) => {
  try {
    return await AsyncStorage.setItem(
      key,
      value
    );
  } catch (error) {
    return error
  }
};

const _getData = async (key) => {
  try {
    return await AsyncStorage.getItem(key)
  } catch(error) {
    return error
  }
}

const _removeItemValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  }
  catch(error) {
    return error;
  }
}

export {
  _storeData,
  _getData,
  _removeItemValue
}