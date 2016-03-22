import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from 'app/components/stateless/App'

require('app/style/app');

const rootElement = document.getElementById('root');

render(
    <App />,
    rootElement
);
