import React from "react";

import RootNavigator from "./src/navigators";

import { PersistGate } from "redux-persist/integration/react";

import { persistStore } from "redux-persist";
import { store } from "./src/store";
import { Provider } from "react-redux";

export default function App() {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}
