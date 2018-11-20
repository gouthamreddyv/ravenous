import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class Searchbar extends
React.Component {
  render (){

    return (
<div className="SearchBar">
   <div className="SearchBar-sort-options">
     <ul>
       {
         Object.keys(sortByOptions).map(function(sortByOption) {
          let sortByOptionValue = sortByOptions[sortByOption];
         return <li Key={sortByOptionValue}>{sortByOption}</li>
       }.bind(this))
     }
     </ul>
   </div>
   <div className="SearchBar-fields">
     <input placeholder="Search Businesses" />
     <input placeholder="Where?" />
   </div>
   <div className="SearchBar-submit">
     <a>Let's Go</a>
   </div>
</div>
    );

  }


}

export default Searchbar;
