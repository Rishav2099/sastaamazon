'use client';  // Make sure this directive is at the very top

import { Provider } from "react-redux";
import { store } from "@/redux";
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from "redux-persist/es/persistStore";

let persistor = persistStore(store)
export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

      {children}
        </PersistGate>
    </Provider>
  );
};
