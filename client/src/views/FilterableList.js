import React from 'react';
import SearchBar from './SearchBar';
import ExpandableList from './ExpandableList';
import sampleListItems from '../sample-list-items';

export default class FilterableList extends React.Component {

  render() {
    return (
      <div>
        <SearchBar items={sampleListItems}/>
        <ExpandableList items={sampleListItems}/>
      </div>
    );
  }

}
