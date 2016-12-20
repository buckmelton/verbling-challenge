import React from 'react';

export default class ListItem extends React.Component {

  render() {
    return (
      <li className="item">
        <p>{this.props.details.text}</p>
      </li>
    );
  }

}
