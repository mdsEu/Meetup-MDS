// Dependecies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Assets
import logo from '../../image/logo.svg';
import '../../css/Header.css';

class Header extends Component {
	static propTypes = {
		menu: PropTypes.array.isRequired,
		title: PropTypes.string
	};

	render(){
		const { menu, title = "React.JS" } = this.props;

		return (<div className="Header">
					<div className="Header-header">
          				<img src={logo} className="Header-logo" alt="logo" />
         		 		<h2>Welcome to {title}</h2>
         		 		<ul className="Menu">
         		 		{ menu && menu.map((item, i) => <li key={i}><Link to={item.url}>{item.title}</Link></li>) }
         		 		</ul>
        			</div>
				</div>);
	}
}

export default Header;