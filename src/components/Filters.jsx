import React, { useState } from 'react';
import SearchButton from './SearchButton';

function Filters({ onApplyFilters, municipalities }) {
   // State to manage filter conditions
  const [municipality, setMunicipality] = useState('');// Selected municipality
  const [industry, setIndustry] = useState('');// Selected industry
  const [tech, setTech] = useState('');// Selected tech stack


   // Apply filters when the search button is clicked
  const handleSearch = () => {
    if (!municipality) {
      alert('Please select a municipality before searching.');// Alert when municipality is not selected
      return;
    }
    onApplyFilters({ municipality, industry, tech });// Send filter criteria to parent component
  };

  return (
    <div>
      <label>
        Select Municipality:
        <select
          value={municipality}
          onChange={(e) => setMunicipality(e.target.value)}
          style={{ marginLeft: '10px', marginBottom: '10px' }}
        >
          <option value="">Select Municipality</option>
          {municipalities.map((m) => (
            <option key={m.id} value={m.name}>
              {m.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Select Industry:
        <select
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          style={{ marginLeft: '10px', marginBottom: '10px' }}
        >
          <option value="">Select Industry</option>
          <option value="IT">IT</option>
          <option value="Healthcare">Healthcare</option>
        </select>
      </label>
      <label>
        Select Tech:
        <select
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          style={{ marginLeft: '10px', marginBottom: '10px' }}
        >
          <option value="">Select Tech</option>
          <option value="React">React</option>
          <option value="Node.js">Node.js</option>
        </select>
      </label>
      <SearchButton onSearch={handleSearch} />
    </div>
  );
}

export default Filters;
