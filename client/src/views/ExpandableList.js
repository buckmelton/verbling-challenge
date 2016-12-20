import React from 'react';

export default class ExpandableList extends React.Component {

  render() {
    return (
      <div className="expand-list">
        <p>Expandable List Goes Here</p>
        <p>{this.props.items.item1.text}</p>
      </div>
    );
  }

}
