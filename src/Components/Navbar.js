import React, { Component } from 'react'
import { AuthContext } from '../Contexts/AuthContext';
import { ThemeContext } from '../Contexts/ThemeContext';


export default class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        { (authContext) => {
          return (
            <ThemeContext.Consumer>
              {(themecontext) => {
                const { isDarkTheme, lightTheme, darkTheme } = themecontext;
                const { isLoggedIn, changeAuthStatus } = authContext;
                const theme = isDarkTheme ? darkTheme : lightTheme;

                return (
                  <nav style={{ background: theme.background, color: theme.contextType, height: '120px' }} >
                    <h2 style={{ textAlign: 'center'}}>
                      Oak Academy
                    </h2>
                    <p
                      onClick={changeAuthStatus}
                      style={{ textAlign: 'center' }}
                    >{isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
                    <div className="ui three buttons" >
                      <button className="ui button" >Overview</button>
                      <button className="ui button" >Contact</button>
                      <button className="ui button" >Support</button>
                    </div>
                  </nav>
                );
              }}
            </ThemeContext.Consumer>
          )
        }}
      </AuthContext.Consumer>      
    );
  }
}
