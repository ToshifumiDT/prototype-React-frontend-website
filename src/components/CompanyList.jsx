import React from 'react';

// Company List
function CompanyList({ companies }) {
  return (
    <div>
      <h2>Company List</h2>
      {companies.map((company) => (
        <div key={company.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          
          <h3>Company Name: {company.name}</h3>
          
          <p><strong>Location:</strong> {company.location}</p>
          
          <p><strong>Contact:</strong> {company.contact}</p>
          
          <p><strong>Industry:</strong> {company.industry}</p>
          
          <p><strong>Company Description:</strong> {company.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CompanyList;
