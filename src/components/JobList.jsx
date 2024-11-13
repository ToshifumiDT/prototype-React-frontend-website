// import React from 'react';
import "../styles/JobList.css";

// function JobList() {
//   return <div>Job List</div>;
// }

const JobList = () => {
  return (
    <div className="job-list">
      <div className="results-count">
        <span>100 found</span>
        <button className="sort-button">Date</button>
      </div>

      <div className="job-card">
        <h3 className="job-title">Software Engineer</h3>
        <div className="job-details">
          <p>Skills: React, Node.js</p>
          <p>Type: Junior</p>
          <a className="job-link" href="#">
            Link here
          </a>
        </div>
        <button className="favorite-button">Add to Favorites</button>
      </div>

      {/* Pagination */}
      <div className="pagination">{/* Pagination buttons */}</div>
    </div>
  );
};

export default JobList;
