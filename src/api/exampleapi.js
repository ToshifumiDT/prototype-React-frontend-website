const BASE_URL = '/api';// Base URL for API
const HEADERS = {
  'Content-Type': 'application/json',
};

// Fetch companies along with related job postings
export const fetchCompaniesWithJobs = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/BrregApiData/read?include={"webCrawlerData":true}&where={"webCrawlerData":{"isNot":null}}`,
      {
        method: 'GET',
        headers: HEADERS,
      }
    );
    if (!response.ok) throw new Error(`Failed to fetch companies: ${response.status}`);
    const result = await response.json();
    if (!result.success) throw new Error(`API Error: ${result.error}`);
    return result.data; // Return fetched data
  } catch (error) {
    console.error('Error fetching companies:', error);
    return [];// Return an empty array on error
  }
};

// Fetch all job data
export const fetchJobs = async () => {
  try {
    const response = await fetch(`${BASE_URL}/WebCrawlerData/read`, {
      method: 'GET',
      headers: HEADERS,
    });
    if (!response.ok) throw new Error(`Failed to fetch jobs: ${response.status}`);
    const result = await response.json();
    if (!result.success) throw new Error(`API Error: ${result.error}`);
    return result.data;// Return fetched data
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];// Return an empty array on error
  }
};

// Fetch municipalities from company data
export const fetchMunicipalities = async () => {
  try {
    const companies = await fetchCompaniesWithJobs();
    const municipalities = Array.from(
      new Set(companies.map((company) => company.kommune))
    ).map((name, index) => ({ id: index + 1, name }));
    return municipalities;// Return municipalities
  } catch (error) {
    console.error('Error fetching municipalities:', error);
    return [];// Return an empty array on error
  }
};
