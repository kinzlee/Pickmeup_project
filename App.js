import React from 'react';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import 'react-native-gesture-handler';
import authReducer from './store/AuthReducer';
// import { NavigationContainer } from '@react-navigation/native';
import App from './src';



const rootReducer = combineReducers({
    auth: authReducer
  });

const store = createStore(rootReducer);


function Application(){
    return(
    <Provider store={store} > 
     <App/>
    </Provider>
    )
}

export default Application;
