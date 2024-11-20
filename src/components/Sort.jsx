import React, { useState } from 'react';

// Sort component
function Sort({ onSortChange }) {
  const [sortOption, setSortOption] = useState('');

  // Handle changes to sorting options
  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);
    onSortChange(selectedOption);
  };

  return (
    <div>
      <label htmlFor="sort-select">Sort by:</label>
      <select
        id="sort-select"
        value={sortOption}
        onChange={handleSortChange}
        style={{ marginLeft: '10px' }}
      >
        <option value="">Select</option>
        <option value="nameAsc">Name (A-Z)</option>
        <option value="nameDesc">Name (Z-A)</option>
        <option value="dateAsc">Date Added / Deadline (Oldest First)</option>
        <option value="dateDesc">Date Added / Deadline (Newest First)</option>
      </select>
    </div>
  );
}

export default Sort;
