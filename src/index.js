import 'antd/dist/antd.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import {BrowserRouter} from "react-router-dom";
import { UserProvider } from './context/provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<UserProvider>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		</UserProvider>		
	</React.StrictMode>
);
