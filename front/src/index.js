
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import Main from './containers/Main.jsx';

ReactDOM.render (
		<BrowserRouter>
			<Route path= '/' component= { Main } />
		</BrowserRouter>
	,document.getElementById ('app')
);