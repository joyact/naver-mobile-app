import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserContextProvider } from './contexts/UserContext';

ReactDOM.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
  document.getElementById('root')
);
git / apps / naver - mobile - app / src / components;
