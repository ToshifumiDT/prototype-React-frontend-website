// Dynamically set BASE_URL depending on the environment
const BASE_URL = import.meta.env.MODE === 'production'
  ? import.meta.env.VITE_BASE_URL // Use environment variable for production
  : '/api'; // Use local endpoint for development

console.log('Base URL:', BASE_URL); // Debugging: Log the BASE_URL

// Default headers for API requests
const HEADERS = {
  'Content-Type': 'application/json',
};

// Fetch companies along with related job postings
export const fetchCompaniesWithJobs = async () => {
  try {
    console.log('Fetching companies from:', `${BASE_URL}/BrregApiData/read`); // Debugging
    const response = await fetch(
      `${BASE_URL}/BrregApiData/read?include=${encodeURIComponent(
        JSON.stringify({ webCrawlerData: true })
      )}&where=${encodeURIComponent(
        JSON.stringify({ webCrawlerData: { isNot: null } })
      )}`,
      {
        method: 'GET',
        headers: HEADERS,
      }
    );
    if (!response.ok) {
      console.error('Error response:', await response.text()); // Log the error response text
      throw new Error(`Failed to fetch companies: ${response.status}`);
    }
    const result = await response.json();
    if (!result.success) throw new Error(`API Error: ${result.error}`);
    return result.data; // Return fetched data
  } catch (error) {
    console.error('Error fetching companies:', error.message || error);
    return []; // Return an empty array on error
  }
};

// Fetch all job data
export const fetchJobs = async () => {
  try {
    console.log('Fetching jobs from:', `${BASE_URL}/WebCrawlerData/read`); // Debugging
    const response = await fetch(`${BASE_URL}/WebCrawlerData/read`, {
      method: 'GET',
      headers: HEADERS,
    });
    if (!response.ok) {
      console.error('Error response:', await response.text()); // Log the error response text
      throw new Error(`Failed to fetch jobs: ${response.status}`);
    }
    const result = await response.json();
    if (!result.success) throw new Error(`API Error: ${result.error}`);
    return result.data; // Return fetched data
  } catch (error) {
    console.error('Error fetching jobs:', error.message || error);
    return []; // Return an empty array on error
  }
};

// Fetch municipalities from company data
export const fetchMunicipalities = async () => {
  try {
    console.log('Fetching municipalities from companies'); // Debugging
    const companies = await fetchCompaniesWithJobs();
    const municipalities = Array.from(
      new Set(companies.map((company) => company.kommune))
    ).map((name, index) => ({ id: index + 1, name }));
    return municipalities; // Return unique municipalities
  } catch (error) {
    console.error('Error fetching municipalities:', error.message || error);
    return []; // Return an empty array on error
  }
};
