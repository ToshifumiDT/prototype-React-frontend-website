import React, { useState } from 'react';
import SearchButton from './SearchButton';

function Filters({ onApplyFilters, municipalities }) {
  const [municipality, setMunicipality] = useState('');
  const [industry, setIndustry] = useState('');
  const [tech, setTech] = useState('');

  const handleSearch = () => {
    if (!municipality) {
      alert('Please select a municipality before searching.');
      return;
    }
    onApplyFilters({ municipality, industry, tech });
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
          <option value="Finance">Finance</option>
          <option value="Education">Education</option>
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
          <option value="Python">Python</option>
          <option value="Java">Java</option>
        </select>
      </label>
      <SearchButton onSearch={handleSearch} />
    </div>
  );
}

export default Filters;

