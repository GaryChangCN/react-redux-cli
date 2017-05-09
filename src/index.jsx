import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const store = createStore(reducer,applyMiddleware(thunk));

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
var render=function(){
	ReactDOM.render(<Index/>,app);
}
render();
store.subscribe(render);
