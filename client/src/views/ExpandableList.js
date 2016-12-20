import React from 'react';
import ScrollableList from './ScrollableList';

export default class ExpandableList extends React.Component {

  render() {
    return (
      <div className="expand-list">
        <ScrollableList items={this.props.items}/>
        <div className="button-bar">
          <button>Open All</button>
          <button>Close All</button>
          <button>Toggle All</button>
          <button>Add</button>
        </div>
      </div>
    );
  }

}
