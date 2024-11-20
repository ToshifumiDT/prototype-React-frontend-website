import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CompanyList from './components/CompanyList';
import JobList from './components/JobList';
import Filters from './components/Filters';
import Sort from './components/Sort';
import { fetchCompanies, fetchJobs, fetchMunicipalities } from './api/exampleapi'; // Import Mock API

function App() {
  const [municipalities, setMunicipalities] = useState([]); // municipalities
  const [companies, setCompanies] = useState([]); // companies
  const [jobs, setJobs] = useState([]); // jobs
  const [filteredCompanies, setFilteredCompanies] = useState([]); // filteredCompanies
  const [filteredJobs, setFilteredJobs] = useState([]); // filteredJobs
  const [sortOption, setSortOption] = useState(''); // sortOption

  // Obtain initial data
  useEffect(() => {
    const loadData = async () => {
      try {
        const municipalitiesData = await fetchMunicipalities();
        const companyData = await fetchCompanies();
        const jobData = await fetchJobs();

        // Set data to state
        setMunicipalities(municipalitiesData);
        setCompanies(companyData);
        setJobs(jobData);

        // Display all data as initial value
        setFilteredCompanies(companyData);
        setFilteredJobs(jobData);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadData();
  }, []);

  // Filtering process
  const handleFilters = (filters) => {
    const { municipality, industry, tech } = filters;

    const filteredCompanies = companies.filter((company) => {
      return (
        (!municipality || company.location.includes(municipality)) &&
        (!industry || company.industry.includes(industry))
      );
    });

    const filteredJobs = jobs.filter((job) => {
      return (
        (!municipality || job.location.includes(municipality)) &&
        (!industry || job.industry.includes(industry)) &&
        (!tech || job.skills.includes(tech))
      );
    });

    setFilteredCompanies(filteredCompanies);
    setFilteredJobs(filteredJobs);
  };

  // Sorting process
  const sortData = (data, option) => {
    switch (option) {
      case 'nameAsc':
        return [...data].sort((a, b) => (a.name || a.title).localeCompare(b.name || b.title));
      case 'nameDesc':
        return [...data].sort((a, b) => (b.name || b.title).localeCompare(a.name || a.title));
      case 'dateAsc':
        return [...data].sort((a, b) => new Date(a.dateAdded || a.deadline) - new Date(b.dateAdded || b.deadline));
      case 'dateDesc':
        return [...data].sort((a, b) => new Date(b.dateAdded || b.deadline) - new Date(a.dateAdded || a.deadline));
      default:
        return data;
    }
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const sortedCompanies = sortData(filteredCompanies, sortOption);
  const sortedJobs = sortData(filteredJobs, sortOption);

  return (
    <div>
      <Header />
      {/* Pass municipal data to the filter component */}
      <Filters onApplyFilters={handleFilters} municipalities={municipalities} />
      <Sort onSortChange={handleSortChange} />
      <CompanyList companies={sortedCompanies} />
      <JobList jobs={sortedJobs} />
    </div>
  );
}

export default App;
