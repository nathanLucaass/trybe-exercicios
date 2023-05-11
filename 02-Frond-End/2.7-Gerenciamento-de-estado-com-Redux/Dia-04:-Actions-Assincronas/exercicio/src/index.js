import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//STORE -> GLOBALIZED STATE
const globalState = {
  character: ''
}

//ACTION

const requestCharacter = () => ({
  type: 'REQUEST'
})

//REDUCER

const call = (state = globalState, action) =>{
  switch(action.type){
    case 'REQUEST':
      return 1
    default:
      return state;
  }

}

let store = createStore(call, applyMiddleware(thunk))
//DISPATCH


const fetchCharacter = async (characterName) => {
  const apiUrl = `https://anapioficeandfire.com/api/characters?name=${characterName}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;

  dispatch({type: 'REQUEST', payload: data});
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
