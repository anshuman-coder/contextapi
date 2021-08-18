import React, { Component } from 'react';
import { ThemeContext } from "../Contexts/ThemeContext";

export default class TodosList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkTheme, lightTheme, darkTheme, changeTheme } = this.context;
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
      <div style={{ background: theme.background, color: theme.text, height:'140px',textAlign: 'center' }} >
        <p className="item" >Plan the family trip</p>
        <p className="item" >Go shopping for dinner</p>
        <p className="item" >Go for a walk</p>
        <button className="ui button primary" onClick={ changeTheme } >Change Theme</button>
      </div>
    )
  }
}
