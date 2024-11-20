import React from 'react';

// Joblist
function JobList({ jobs }) {
  return (
    <div>
      <h2>Job Listings</h2>
      {jobs.map((job) => (
        <div key={job.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          
          <h3>Title: {job.title}</h3>
          
          <p><strong>Skills:</strong> {job.skills.join(', ')}</p>
          
          <p><strong>Type:</strong> {job.type}</p>
          
          <p><strong>Description:</strong> {job.description}</p>
          
          <p><strong>Deadline:</strong> {job.deadline}</p>
          
          <a href={job.link} target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF' }}>
            View Job Details
          </a>
        </div>
      ))}
    </div>
  );
}

export default JobList;
