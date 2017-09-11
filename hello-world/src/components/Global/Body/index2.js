// Dependecies
import React, { Component } from 'react';

// Assets
import '../../css/Body.css';

class Body extends Component {
	constructor(props){
		super();

		this.state = {
			count : 0,
			sum: 0,
			num1: 0,
			num2: 0
		}
		this.handleCountClick = this.handleCountClick.bind(this);
		this.handleSumClick = this.handleSumClick.bind(this);
		this.handleNumOnchange = this.handleNumOnchange.bind(this);
	}

	componentDidMount(){
		this.setState({ count: 1 });
	}

	handleCountClick(e){
		if(e.target.id === 'plus'){
			this.setState({ count: this.state.count + 1 });
		}else if(this.state.count > 0 && e.target.id === 'sustraen'){
			this.setState({ count: this.state.count - 1 });
		}else if(e.target.id === 'reset'){
			this.setState({ count: 0 });
		}
	}

	handleSumClick(){
		this.setState({
			sum: this.state.num1 + this.state.num2
		});
	}

	handleNumOnchange(e){
		if(e.target.id === 'num1'){
			this.setState({
				num1: Number(e.target.value)
			});
		}else if(e.target.id === 'num2'){
			this.setState({
				num2: Number(e.target.value)
			});
		}
	}

	render(){
		const { count, sum, num1, num2 } = this.state;
		return (<div className="Body">
					<p className="Body-intro">
          				To get started, edit <code>src/App.js</code> and save to reload.
        			</p>
        			<h1>Count: {count}</h1>
        			<button id="plus" onClick={this.handleCountClick}>+</button>
        			<button id="sustraen" onClick={this.handleCountClick}>-</button>
        			<button id="reset" onClick={this.handleCountClick}>Reset</button>
        			<h1>Result: {sum}</h1>
        			<input id="num1" type="number" value={num1} onChange={this.handleNumOnchange} />
        			<input id="num2" type="number" value={num2} onChange={this.handleNumOnchange} />
        			<button id="reset" onClick={this.handleSumClick}>result</button>
				</div>);
	}
}

export default Body;