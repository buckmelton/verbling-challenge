import React from 'react';
import FilterableList from './FilterableList';

export default class App extends React.Component {

  render() {
    return (
      <div className="verb-chal">
        <h1>Verbling Challenge</h1>
        <FilterableList />
      </div>
    );
  }

}
