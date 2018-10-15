import React, { Component } from 'react';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  state = {
    name: 'Ostap',
    isLoggedIn: false
  };

  handleClick = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div>
        <NavBar />
        <SideBar userName={this.state.name} isLogged={isLoggedIn} />
        <button style={{ marginTop: '4rem' }} onClick={this.handleClick}>
          {isLoggedIn ? 'LogOut' : 'logIn'}
        </button>
      </div>
    );
  }
}

export default App;
