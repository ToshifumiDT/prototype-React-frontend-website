import React from 'react';

// Company List
function CompanyList({ companies }) {
   // Handle case when no company data is available
  if (!companies || companies.length === 0) {
    return <p>No companies available.</p>; // Message displayed when no data
  }

  return (
    <div>
      <h2>Company List</h2>
      {companies.map((company) => (
        <div key={company.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>

          <h3>{company.name || 'No company name available'}</h3>

          <p><strong>Location:</strong> {company.kommune || 'Unknown location'}</p>

          <p><strong>Address:</strong> {company.adresse || 'No address provided'}</p>

          <p><strong>Phone:</strong> {company.telefonNummer || 'No phone number'}</p>

          <p><strong>Email:</strong> {company.epost || 'No email address'}</p>

          <p><strong>Website:</strong> {company.nettside ? <a href={company.nettside} target="_blank" rel="noopener noreferrer">{company.nettside}</a> : 'No website available'}</p>
          
          <p><strong>Industry:</strong> {company.industri || 'No industry specified'}</p>

          <p><strong>Founded:</strong> {company.oppstart || 'No start date'}</p>

          <p><strong>Description:</strong> {company.selskapInfo || 'No description available'}</p>

          {company.webCrawlerData && (
            <div>
              <h4>Related Job:</h4>
              <p><strong>Job Title:</strong> {company.webCrawlerData.jobTittel || 'No title available'}</p>

              <p><strong>Positions:</strong> {company.webCrawlerData.ledigeStillinger || 'N/A'}</p>

              <p><strong>Skills:</strong> {company.webCrawlerData.skills || 'N/A'}</p>

              <p><strong>Deadline:</strong> {company.webCrawlerData.deadline || 'No deadline specified'}</p>

            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CompanyList;
