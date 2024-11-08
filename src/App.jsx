import React from 'react';
import Header from './components/Header';
import CompanyList from './components/CompanyList';
import JobList from './components/JobList';
import Filters from './components/Filters';
import Sort from './components/Sort';

function App() {
  return (
    <div>
      <Header />
      <Filters />
      <Sort />
      <CompanyList />
      <JobList />
    </div>
  );
}

export default App;
