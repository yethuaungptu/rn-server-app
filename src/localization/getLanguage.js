import AsyncStorage from "@react-native-async-storage/async-storage";

export const getLanguage = async () => {
  const value = await AsyncStorage.getItem("persist:root");
  if (value) {
    return isLanguageEng(value) ? "EN" : "MM";
  }
  return "EN";
};

function isLanguageEng(value) {
  return JSON.parse(value).language.includes("EN");
}
