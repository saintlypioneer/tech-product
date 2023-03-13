import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import {store} from './components/redux/store'

import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<p>404</p>} />
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
