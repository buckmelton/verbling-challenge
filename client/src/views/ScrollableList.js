import React from 'react';
import ListItem from './ListItem';

export default class ScrollableList extends React.Component {

  render() {
    return (
      <div className="scroll-list">
        <ul className="items">
          {
            Object
              .keys(this.props.items)
              .map(key => <ListItem
                            key={key}  // the prop 'key' is reserved for React, dont use it
                            index={key} // but we need to have access to the key, so we use our own property, we called it index
                            details={this.props.items[key]}/>)
          }
        </ul>
      </div>
    );
  }

}
