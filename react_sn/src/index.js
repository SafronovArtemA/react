import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux_store';
//import {Provider} from './store_context';
import {Provider} from 'react-redux';


let rerenderEntireTree = (store) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <Provider store={store}>
            <App stor={store}/>
        </Provider>
      </React.StrictMode>
    );
};

rerenderEntireTree(store);


store.subscribe(() => rerenderEntireTree(store));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
