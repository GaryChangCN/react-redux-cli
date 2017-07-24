import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducer from './store/reducer/';

const store = createStore(reducer,applyMiddleware(thunk,promise));

import View from './components/View.jsx';

import './index.less';
class Index extends Component{
	render(){
		return (
			<Provider store={store}>
				<View></View>
			</Provider>
		)
	}
}

var app=document.getElementById("app");
ReactDOM.render(<Index/>,app);
