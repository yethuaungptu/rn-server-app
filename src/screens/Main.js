import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { translate } from "localization";
import { Messages } from "constants/messages";
import { changeLanguage } from "redux/languageSlice";

export default function Main() {
  const dispatch = useDispatch();
  const { lang } = useSelector((state) => state.language);
  console.log(lang);
  const handleChangeLanguage = () =>
    dispatch(changeLanguage(lang == "EN" ? "MM" : "EN"));
  return (
    <View>
      <Text>Main, {translate(Messages.NAME, lang)}</Text>
      <TouchableOpacity onPress={handleChangeLanguage}>
        <Text>Change Language</Text>
      </TouchableOpacity>
    </View>
  );
}
