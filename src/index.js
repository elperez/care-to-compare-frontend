import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import registerServiceWorker from './registerServiceWorker';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'font-awesome/css/font-awesome.min.css'
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
