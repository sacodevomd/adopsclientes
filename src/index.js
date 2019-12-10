import React from 'react';
import { render } from 'react-dom';
import '../src/assets/css/index.css';

import { App } from './App';
import { configureFakeBackend } from './_helpers';
configureFakeBackend();
render(
    <App />,
    document.getElementById('app')
);