// Dependecies
import React, { Component } from 'react';
import Header from './Global/Header';
import Body from './Global/Body';
import Footer from './Global/Footer';
import PropTypes from 'prop-types';

// Assets
import './css/App.css';

// Data
import Menu from '../data/menu';

class App extends Component {
	static propTypes = {
		children: PropTypes.object.isRequired
	};

  render() {
  	const { children } = this.props;

    return (
      <div className="App">
        <Header menu={Menu} title="MDS-Digital"/>
        <Body content={children}/>
        <Footer copyright="&copy; MDSDigital 2017"/>
      </div>
    );
  }
}

export default App;
