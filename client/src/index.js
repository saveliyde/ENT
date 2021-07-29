import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStorage from './Storage/UserStorage';
import SheetsStorage from './Storage/SheetsStorage';

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStorage(),
        sheets: new SheetsStorage(),
    }}>
        <App />,
    </Context.Provider>,
    document.getElementById('root')
);