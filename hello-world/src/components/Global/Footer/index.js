// Dependecies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import '../../css/Footer.css';

class Footer extends Component {
	static propTypes = {
		copyright: PropTypes.string.isRequired
	}
	render(){
		const { copyright } = this.props;

		return (<div className="Footer">
					<p className="Footer-intro">
          				{copyright}
        			</p>
				</div>);
	}
}

export default Footer;