import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CompanyList from './components/CompanyList';
import JobList from './components/JobList';
import Filters from './components/Filters';
import Sort from './components/Sort';
import { fetchCompaniesWithJobs, fetchJobs, fetchMunicipalities } from './api/exampleapi';

function App() {
  // State management for various data
  const [municipalities, setMunicipalities] = useState([]);//municipalities
  const [companies, setCompanies] = useState([]);//companies
  const [jobs, setJobs] = useState([]); //jobs
  const [filteredCompanies, setFilteredCompanies] = useState([]);//filteredCompanies
  const [filteredJobs, setFilteredJobs] = useState([]); //filteredJobs
  const [sortOption, setSortOption] = useState('');//selected sorting option


   // Fetch data on initial rendering
  useEffect(() => {
    const loadData = async () => {
      try {
        // Fetch data from APIs
        const municipalitiesData = await fetchMunicipalities();
        const companyData = await fetchCompaniesWithJobs();
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

    // Filter company data based on the criteria
    const filteredCompanies = companies.filter((company) => {
      return (
        (!municipality || company.kommune === municipality) &&
        (!industry || company.industri.includes(industry))
      );
    });

     // Filter job data based on the criteria
    const filteredJobs = jobs.filter((job) => {
      return (
        (!municipality || job.location === municipality) &&
        (!industry || job.industry.includes(industry)) &&
        (!tech || job.skills.includes(tech))
      );
    });

    // Update state with filtered data
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
        return [...data].sort((a, b) => new Date(a.createdAt || a.deadline) - new Date(b.createdAt || b.deadline));
      case 'dateDesc':
        return [...data].sort((a, b) => new Date(b.createdAt || b.deadline) - new Date(a.createdAt || a.deadline));
      default:
        return data; // Default
    }
  };

  // Handle changes to sorting options
  const handleSortChange = (option) => {
    setSortOption(option);
  };

    // Get sorted data
  const sortedCompanies = sortData(filteredCompanies, sortOption);
  const sortedJobs = sortData(filteredJobs, sortOption);

  return (
    <div>
      <Header />
      <Filters onApplyFilters={handleFilters} municipalities={municipalities} />
      <Sort onSortChange={handleSortChange} />
      <CompanyList companies={sortedCompanies} />
      <JobList jobs={sortedJobs} />
    </div>
  );
}

export default App;
