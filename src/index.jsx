import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import View from './components/View.jsx';
import store from './store/store';

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
