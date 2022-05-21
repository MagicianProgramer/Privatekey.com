import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import { store } from './store/store';
import {Provider} from 'react-redux';
import {ConfigProvider} from 'antd';
import { CookiesProvider } from "react-cookie";

//import css files//
import './App.css';
import './asserts/css/bootstrap.min.css';
import './index.css';
import './asserts/css/added.css';
import './asserts/css/all.css';
import './asserts/css/cryptofont.css';
import 'antd/dist/antd.css';


ReactDOM.render(
	<Provider store={store}>
		<CookiesProvider>
			<ConfigProvider>
				<App/>
			</ConfigProvider>
		</CookiesProvider>
	</Provider>, document.getElementById('root'));

serviceWorker.unregister();
