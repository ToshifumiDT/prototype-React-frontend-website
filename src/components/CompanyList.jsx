import React from 'react';
import FavoriteButton from './FavoriteButton';

function CompanyList() {
  return (
    <div>
      <h2>Company List</h2>
      <div>
        <p>Company A</p>
        <FavoriteButton />
      </div>
      <div>
        <p>Company B</p>
        <FavoriteButton />
      </div>
    </div>
  );
}

export default CompanyList;