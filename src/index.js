import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
//import userReducer from './state/UserSlice';
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate} from 'redux-persist/integration/react';
import { configureStore } from '@reduxjs/toolkit';
import MenuReducer from './state/menuSlice.js';
import UserReducer from './state/UserSlice.js';
import CommandReducer from "./state/CommandSlice.js";
import VehiculeReducer from "./state/VehiculeSlice.js";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";


const persistConfig = {key: "root", storage, version: 1};
const persistedReducer = persistReducer(persistConfig, UserReducer);
const store = configureStore({
     reducer: {
          persistedReducer,
          //UserReducer,
          MenuReducer,
          CommandReducer,
          VehiculeReducer,
      },
      middleware: (getDefaultMiddleware) => 
           getDefaultMiddleware({
                serializableCheck: {
                     ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
                },
                devTools: false
           }),
});

if(process.env.NODE_ENV === 'production') disableReactDevTools()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
          <Provider store={store}> 
                  <PersistGate loading={null} persistor={persistStore(store)}  >   
		                      <App />
                  </PersistGate>       
	     </Provider>
  </React.StrictMode>
);


/*
{
<PersistGate loading={null} persistor={persistStore(store)}  >
</PersistGate> }*/