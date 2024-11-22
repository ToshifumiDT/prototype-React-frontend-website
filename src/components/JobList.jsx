import React from 'react';

// Joblist
function JobList({ jobs }) {
  if (!jobs || jobs.length === 0) {
    // Handle case when no job data is available
    return <p>No jobs available.</p>;// Message displayed when no data
  }

  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>

            <h3>{job.jobTittel || 'No title available'}</h3>

            <p><strong>Positions:</strong> {job.ledigeStillinger || 'N/A'}</p>

            <p><strong>Skills:</strong> {job.skills ? job.skills.split(', ').join(', ') : 'N/A'}</p>

            <p><strong>Description:</strong> {job.jobBeskrivelse || 'No description available'}</p>

            <p><strong>Deadline:</strong> {job.deadline || 'No deadline specified'}</p>

            <p><strong>Job URL:</strong> {job.urlStilling ? <a href={job.urlStilling} target="_blank" rel="noopener noreferrer">View Details</a> : 'No URL available'}</p>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
