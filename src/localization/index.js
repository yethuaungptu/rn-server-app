import * as Localization from "expo-localization";
import i18n from "i18n-js";
import EN from "./EN";
import MM from "./MM";

i18n.fallbacks = true;
i18n.translations = { EN, MM };
i18n.locale = Localization.locale;

export const translate = (scope, locale) => {
  return i18n.t(scope, { locale: locale });
};
