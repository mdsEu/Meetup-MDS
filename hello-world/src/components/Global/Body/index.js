import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import '../../css/Body.css';

class Body extends Component {
	static propTypes = {
		content: PropTypes.object.isRequired
	};

	render() {
		const { content } = this.props;

    	return (
    		<div className="body">
    			{content}
	        </div>
    	);
    }
}

export default Body;